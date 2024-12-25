import React from "react";
import millennialDesign from '@/app/assets/blog-page/1.png'
import newwaysofdecorating from '@/app/assets/blog-page/2.png'
import HandmadePieces from '@/app/assets/blog-page/3.png'
import ModernHome from '@/app/assets/blog-page/4.png'
import ColorfulOffice from '@/app/assets/blog-page/5.png'
import Image from "next/image";
import { TRecentPost } from "../interface/blogPage/componentsType";
const RecentPosts = () => {
    const posts:TRecentPost[] = [
      {
        id: 1,
        title: "Going all-in with millennial design",
        date: "03 Aug 2022",
        image: millennialDesign, 
      },
      {
        id: 2,
        title: "Exploring new ways of decorating",
        date: "03 Aug 2022",
        image: newwaysofdecorating, 
      },
      {
        id: 3,
        title: "Handmade pieces that took time to make",
        date: "03 Aug 2022",
        image: HandmadePieces, 
      },
      {
        id: 4,
        title: "Modern home in Milan",
        date: "03 Aug 2022",
        image:ModernHome, 
      },
      {
        id: 5,
        title: "Colorful office redesign",
        date: "03 Aug 2022",
        image: ColorfulOffice, 
      },
    ];
  
    return (
      <div className="  bg-white rounded-lg font-Poppins ">
        {/* Title */}
        <h2 className="sm:text-base text-xl font-medium mb-4">Recent Posts</h2>
  
        {/* Posts */}
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="flex items-center space-x-4  ">
              {/* Post Image */}
              <Image
                src={post.image}
                alt={post.title}
                className="sm:w-[80px] sm:h-[80px] w-[40px] h-[40px] sm:rounded-[10px] rounded-[5px] object-cover"
              />
  
              {/* Post Info */}
              <div className="w-[119px] h-[65px]">
                <h3 className="sm:text-sm text-xs font-normal text-gray-800 leading-[21px]">
                  {post.title}
                </h3>
                <p className="text-xs text-[#9F9F9F] font-normal leading-[18px]">{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RecentPosts;
  