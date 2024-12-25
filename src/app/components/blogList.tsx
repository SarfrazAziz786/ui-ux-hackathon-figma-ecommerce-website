import React from "react";
import Image from "next/image";
import blogImg1 from '@/app/assets/blog-page/blogImg1.png' 
import blogImg2 from '@/app/assets/blog-page/blogImg2.png' 
import blogImg3 from '@/app/assets/blog-page/blogImg3.png' 
import { RiAdminLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { FaTag } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    image:blogImg1,
    title: "Going all-in with millennial design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos dicta inventore ea magni pariatur accusamus aliquam sequi error voluptatibus, soluta animi amet dignissimos aut natus vel, a commodi similiqueRepudiandae consequuntur vero eius doloribus dolorum quisquam distinctio laudantium, exercitationem consequatur autem accusamus fugit fuga quas mollitia! Exercitationem sint accusamus dolor ducimus quos. Ad accusamus quod dicta commodi quasi dolore!",
    date: "11 Oct 2022",
    author: "Admin",
    imageUrl: "/images/post1.png",
    category: "Design",

  },
  {
    id: 2,
    image:blogImg2,
    title: "Exploring new ways of decorating",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos dicta inventore ea magni pariatur accusamus aliquam sequi error voluptatibus, soluta animi amet dignissimos aut natus vel, a commodi similiqueRepudiandae consequuntur vero eius doloribus dolorum quisquam distinctio laudantium, exercitationem consequatur autem accusamus fugit fuga quas mollitia! Exercitationem sint accusamus dolor ducimus quos. Ad accusamus quod dicta commodi quasi dolore!",

    date: "12 Oct 2022",
    author: "Admin",
    imageUrl: "/images/post2.png",
    category: "Crafting",

  },
  {
    id: 3,
    image:blogImg3,
    title: "Handmade pieces that took time to make",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    date: "08 Oct 2022",
    author: "Admin",
    imageUrl: "/images/post3.png",
    category: "Handmade",
  },
];

const BlogList = () => {
  return (
    <div className="  mx-auto px-4 py-6  ">
      <div className="grid grid-cols-1 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col  bg-white  rounded-lg overflow-hidden"
          >
            <Image
              src={post.image}
              alt={post.title}
              className="w-full md:w-[817px] h-48 md:h-[500px] object-cover"
            />
            <div className="sm:p-6 flex flex-col justify-between">
              <div className="w-[817px] font-Poppins flex flex-col gap-3 justify-between ">
              <p className="text-gray-600  mb-2 sm:flex gap-4   hidden ">
              <RiAdminLine />{post.author} <SlCalender />{post.date} <FaTag /> {post.title==="Exploring new ways of decorating"? "Handmade" : "Wood" 
              }

                </p>
                <h2 className="sm:w-[550px] sm:h-[45px] w-[200px] sm:text-[30px]  text-lg font-semibold sm:mb-2">{post.title}</h2>
                
                <p className="text-gray-700 w-[817px] h-[115px] mb-4 text-[15px] leading-[22.5px] text-justify font-normal">{post.description}</p>
              </div>
              <button className=" w-[89px] h-[36px] text-black  border-b-2 border-black  font-medium hover:text-yellow-500">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {/* <div className="flex justify-center items-center mt-8 space-x-2">
        <button className="bg-yellow-500 text-white py-1 px-3 rounded">
          1
        </button>
        <button className="bg-gray-200 text-gray-800 py-1 px-3 rounded">
          2
        </button>
        <button className="bg-gray-200 text-gray-800 py-1 px-3 rounded">
          3
        </button>
        <button className="bg-gray-200 text-gray-800 py-1 px-3 rounded">
          Next
        </button>
      </div> */}
        
    </div>
  );
};

export default BlogList;
