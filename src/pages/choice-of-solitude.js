import React from 'react';
import relaxingman from './relaxing-man.jpg'

const Intro = () => {
    return(
        <div className ="page-item"> 
        <h1 className='header-properties'> <strong> The Choice of Solitude Over Socialization in College : Introduction </strong> </h1>
        <hr/>
        <p className="dateSub"> <em> November 30th, 2022 </em> </p>
        <br/>
        <br/>
        <p> &emsp; &emsp; When it comes to the lifestyle of college students, most people tend to generalize the idea that all college 
            students enjoy going out to party and spend time with friends, while only spending time alone when they have to study for 
            their next big exam or work on a project they have been procrastinating on in one of their classes. At least, that’s how I 
            viewed college students, as did most of my friends and family. So when I told my friends & family that I wouldn’t be living 
            on campus, a lot of them told me that it was a bad idea to live off campus in my first year, and that I wouldn’t get the full 
            “College Experience” by living off campus. My reasoning for living off campus was not just because I didn’t like the idea of 
            living in a small box of a room, it was also because I didn’t want to spend the extra money that comes with living on campus, 
            and also because I wanted to keep my privacy, and my ability to disconnect myself from the rest of campus.
            </p>
            <br/>
        <p> &emsp; &emsp; For me, going to the U is just my way of making sure that I can get the job that I want, and have a future that I 
            am comfortable with. Even if it means sacrificing some of that genuine college experience, I have no problem with it. That means
             that I also spend more time on my own than always socializing and hanging out with other people, or making friends like most of
              the people around me are. Thing is, there are plenty of benefits to wanting to spend time by myself, and the fact that so many
               people see that point of view as an odd or negative thing, is disappointing. With that being said, I hope to explore the 
               positives to spending time alone, and how it can improve the mental health and productivity of those who take more time to 
               be with themselves.
               </p>
        <br/>
        <br/>
        <h2><em>Benefits of Solitude</em></h2>
        <br/>
        <p> &emsp; &emsp; Although being introverted does not mean being antisocial, it does mean that the way someone reacts to social 
            interaction is different from those who are extroverted. The way that they view what is considered to be social interaction 
            can be different as well. As Susan Cain points out in her TED Talk from 2012, her family’s viewpoint of how they socialize and 
            spend time with each other was far different than how those at her summer camp did.</p>
            <br/>
            <div className="centerimg">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/c0KYU2j0TM4?start=15" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            </div>
            <br/>
            <p> &emsp; &emsp; Those around her viewed her idea of social interaction as weird, and she was told to be more ‘Rowdy’ and 
                extroverted rather than wanting to spend time on her own. While that makes a little more sense for a kid to go and make 
                friends, the fact that life for adults is so similar to this summer camp mindset, can often bring a negative association 
                to acting more introverted. In the corporate world, people are often encouraged to work in teams, while having small solo 
                assignments that contribute to a larger project. While there is nothing wrong with this way of doing projects, the amount 
                of time that is spent having to speak with other coworkers or even the project manager can break the flow of productivity for 
                those who would rather work alone, or be given more privacy to work on their assignments. As Cain goes on, she goes more in depth
                 on other parts of society like this, such as schools and other, more professional places. </p>
            
            <br/>
            <p> &emsp; &emsp; Some examples of the benefits of being introverted and spending more time alone can be seen in Cain’s TED talk, 
                regarding how productivity can be increased alongside creativity and one’s ability to think clearly. Another place where the 
                benefits of solitude are realized can be taken from Ginny Graves’ Power of Solitude article in Health Magazine. In the article, 
                Ginny points out six ways to increase one’s time to think, such as: waking up earlier to spend more time to yourself; purchasing
                 an alarm clock instead of using a phone to wake up and not feel the urge to stare at a phone; and to recognize that everyone 
                 needs some time to themselves.</p>

                 <br/>
                 <div className="centerimg"><img src={relaxingman} alt="Man relaxing at home."></img>
                 <p> <em> by Nenad Stojkovic </em>
                    </p>
                    </div>
                    <br/>
            <p> &emsp; &emsp; Although it is not very hard to find time for oneself, Some ways that I feel people could find a better way to spend said
                 time is by plotting out how to spend their time, a very simple and obvious answer, but most people don’t tend to do this and kind of
                  go with the flow, and do whatever they feel like doing. If it were me, I would come up with a list of things I should get done first
                   with my time alone, then after finishing anything I set before me, I am free to decide to do whatever without feeling guilty about 
                   just sitting around. It makes enjoying time alone easier, and it also makes relaxing easier. </p>




        </div> 
    );
};

export {Intro};
