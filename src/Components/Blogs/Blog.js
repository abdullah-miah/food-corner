import React from 'react';
import "../Blogs/Blog.css";

const Blog = () => {
    return (
        <div className='blogs'>
            <h2>Blogs</h2>
            <div className='blog'>
            <div>
                <h3>
                    What is contex API?
                </h3>
                <p>
                    Contex API is a react structure. The react contex API is a way for
                    react app effectively. This is the alternative to props drilling. Contex
                    API is a new feature in V16.3 . React.CreateContex() is all you need.
                </p>
            </div>
             <div> 
                 <h3> What is Semantic tag?</h3>
                 <p> 
                     Semantic tag are clearly describe their meaning in a human and machine-readable way. 
                     It also markup language. They Accurately describe the purpose of the element in javaScript
                     consider a function.
                 </p>
             </div>

            </div>
            
        </div>
    );
};

export default Blog;