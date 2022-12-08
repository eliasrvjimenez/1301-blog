import React from 'react';
import {Link} from 'react-router-dom';

const BlogPage = () => {
    return(
        <div className="page-item">
            <h1 className="h1blogpage"> All Blogs: </h1>
            <div className="card-link"><Link to="/1301-blog/overloaded-to-optimistic">
            <h2> Overloaded to Optimistic </h2>
            <p className="dateSub"> <em>September 30th, 2022 </em></p>
             <p><em>   I am not a writer. At least, not at heart. Down to the bone, I have always been a more logic-oriented person, 
             and creativity was never a strong suit of mine. Sure, I may be able to type quickly, and can type pages upon pages in 
             less than an hour, but that, to me, does not constitute a writer. Writers are people with the passion and creativity to 
             create beautiful works, filled to the brim with words that drive the reader to visualize whatever it is they have read, 
             and visualize it well. Writers can create worlds from nothing, sprawling their ideas onto the page with ease. That is 
             something that I cannot do... </em>
                </p>
            </Link>
            </div>
            <br />
            <div className="card-link"><Link to="/1301-blog/what-makes-a-writer">
            <h2> What Makes a Writer? </h2>
            <p className="dateSub"> <em> October 26th, 2022  </em></p>
             <p><em>  In an era that revolves around the use of technology and media to connect everyone to the rest of the world,
                 there are those who abuse their voices on the internet and push their thoughts and ideologies that if blindly followed
                  by others, can be incredibly dangerous and to society as a whole. Most of this is done through the means of writing, 
                  and it’s power to spread ideas and information, no matter if it is fact or fiction, to a greater audience of people. 
                  But what gives someone the status, or title, of writer? What allows them to be seen as a writer, someone who has a
                   platform? Is it someone who went through years of rigorous work and thousands of dollars in order to get a piece of
                    paper that states they are a writer? Or is it something else, something like a desire to be seen and heard by others,
                     to be given a voice in a world filled with voices....</em>
                </p>
            </Link>
            </div>
            <br/>
            <br/>
            <h2 className="h2blogpage"> The Choice of Solitude over Socialization in College</h2>
            <div className="card-link"><Link to="/1301-blog/the-choice-of-solitude-over-socialization-intro">
            <h2> Introduction</h2>
            <p className="dateSub"> <em> November 30th, 2022</em></p>
             <p><em>  When it comes to the lifestyle of college students, most people tend to generalize the idea that 
                all college students enjoy going out to party and spend time with friends, while only spending time alone 
                when they have to study for their next big exam or work on a project they have been procrastinating on in one 
                of their classes. At least, that’s how I viewed college students, as did most of my friends and family. So when 
                I told my friends & family that I wouldn’t be living on campus, a lot of them told me that it was a bad idea to 
                live off campus in my first year, and that I wouldn’t get the full “College Experience” by living off campus. My
                 reasoning for living off campus was not just because I didn’t like the idea of living in a small box of a room, 
                 it was also because I didn’t want to spend the extra money that comes with living on campus, and also because I 
                 wanted to keep my privacy, and my ability to disconnect myself from the rest of campus.....</em>
                </p>
            </Link>
            </div>
        </div>
    );
};

export {BlogPage}