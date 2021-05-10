import { Link } from "react-router-dom";

const BlogList = ({blogs,test}) => { // بيهياها ل استقبال الداتا  كده الداتا هتبقى جوا البروبس لو خطيت بين القوسين بروبس لكن لو حطيت متغيرات ع طول في كيرلي هيملا المتغيرات بالتلاتيب اللي هناك ف الكموبوننت
//    const  blogs = props.blogs //الطريقه دي لو انا عامل اتربيوت ف الكومبوننت اسمه بروبس
//    const test =props.test

    
    return (  
        <div className="blog-list">
            <h2>{test}</h2>
             {blogs.map((blog)=>(
                 <div className="blog-preview" key={blog.id} >
                     <Link to={`blogs/${blog.id}`}>
                     <h2>{ blog.title }</h2>
                     <p>Written by { blog.author }</p>
                     </Link>
                                    
                 </div>
                 



            ))}
             
        </div>
    );
}
 
export default BlogList;