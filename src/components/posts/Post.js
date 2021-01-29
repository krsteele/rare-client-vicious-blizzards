import React, { useContext, useState } from "react"
import { PostContext } from "./PostProvider"
import { Link } from "react-router-dom"
import './Post.css'


export const Post = ({post, props}) =>{
    // when user provider is provided, if statement will need to be altered to user.id = localstorage.getItem(rare_user_id)
    if(localStorage.getItem("rare_user_id")){
        console.log(post)
        return(
            
            <div className="posts">
               <div>userid: {post.user_id}</div>
                <div>category_id: {post.category_id}</div>
                <Link to={{
                    pathname: `/posts/${post.id}`,
                    state: { chosenPost: post }
                }}>title: {post.title}</Link>
                <div>publication_date: {post.publication_date}</div>
                <div>image_url: {post.image_url}</div>
                <div>content: {post.content}</div>
                <div>category: {post.category.label}</div>
            </div>
        )
    }else{
        return(
            <div>
                U havent made any posts
            </div>
        )
    }
}