import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from "next/server";

// Configure Cloudinary
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dmk4cbsxp",
  api_key: process.env.CLOUDINARY_API_KEY || "417156757243344",
  api_secret: process.env.CLOUDINARY_API_SECRET || "iLa94tdNw_ormtdXmgmdyySdiUw"
});

const LoadDB = async () => {
  await ConnectDB();
}

LoadDB();

export async function POST(request) {
  try {
    const formData = await request.formData();
    const image = formData.get('image');

    if (!image) {
      return NextResponse.json(
        { success: false, message: "No image provided" },
        { status: 400 }
      );
    }

    // Convert ArrayBuffer to Base64
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Image = buffer.toString('base64');
    const dataURI = `data:${image.type};base64,${base64Image}`;

    // Upload image to Cloudinary using base64
    const cloudinaryResponse = await cloudinary.uploader.upload(dataURI, {
      folder: 'blog-app',
      resource_type: 'auto'
    });

    const blogData = {
      title: formData.get('title'),
      description: formData.get('description'),
      category: formData.get('category'),
      author: formData.get('author'),
      authorImg: formData.get('authorImg') || "/author_img.png",
      image: cloudinaryResponse.secure_url,
    };

    await BlogModel.create(blogData);
    return NextResponse.json({ 
      success: true, 
      message: "Blog Added Successfully",
      data: blogData
    });

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || "Failed to upload blog",
        error: error.stack // For debugging
      },
      { status: 500 }
    );
  }
}


export async function GET(request) {
  try {
    const blogId = request.nextUrl.searchParams.get("id");
    if (blogId) {
      const blog = await BlogModel.findById(blogId);
      return NextResponse.json(blog || { error: "Blog not found" });
    }
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(id);

    if (!blog) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    // Extract public ID from URL
    const urlParts = blog.image.split('/');
    const publicId = urlParts[urlParts.length - 1].split('.')[0];

    // Delete image from Cloudinary
    await cloudinary.uploader.destroy(`blog-app/${publicId}`);

    // Delete blog from database
    await BlogModel.findByIdAndDelete(id);
    
    return NextResponse.json({ 
      success: true, 
      message: "Blog Deleted Successfully" 
    });

  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete blog" },
      { status: 500 }
    );
  }
}