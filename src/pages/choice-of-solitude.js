import React from 'react';
import relaxingman from './relaxing-man.jpg';
import activeClass from './activeclass.jpg';
import busyoffice from './busy-office.jpg';
import cubicles from './cubicles.jpg';
import meeting from './Staff_meeting.jpg';

const Intro = () => {
    return (
        <div className="page-item">
            <h1 className='project3header'> <strong> The Choice of Solitude Over Socialization in College : Introduction </strong> </h1>
            <hr />
            <p className="dateSub"> <em> November 30th, 2022 </em> </p>
            <br />
            <br />
            <p> &emsp; &emsp; When it comes to the lifestyle of college students, most people tend to generalize the idea that all college
                students enjoy going out to party and spend time with friends, while only spending time alone when they have to study for
                their next big exam or work on a project they have been procrastinating on in one of their classes. At least, that’s how I
                viewed college students, as did most of my friends and family. So when I told my friends & family that I wouldn’t be living
                on campus, a lot of them told me that it was a bad idea to live off campus in my first year, and that I wouldn’t get the full
                “College Experience” by living off campus. My reasoning for living off campus was not just because I didn’t like the idea of
                living in a small box of a room, it was also because I didn’t want to spend the extra money that comes with living on campus,
                and also because I wanted to keep my privacy, and my ability to disconnect myself from the rest of campus.
            </p>
            <br />
            <p> &emsp; &emsp; For me, going to the U is just my way of making sure that I can get the job that I want, and have a future that I
                am comfortable with. Even if it means sacrificing some of that genuine college experience, I have no problem with it. That means
                that I also spend more time on my own than always socializing and hanging out with other people, or making friends like most of
                the people around me are. Thing is, there are plenty of benefits to wanting to spend time by myself, and the fact that so many
                people see that point of view as an odd or negative thing, is disappointing. With that being said, I hope to explore the
                positives to spending time alone, and how it can improve the mental health and productivity of those who take more time to
                be with themselves.
            </p>
            <br />
            <br />
            <h2><em>Benefits of Solitude</em></h2>
            <br />
            <p> &emsp; &emsp; Although being introverted does not mean being antisocial, it does mean that the way someone reacts to social
                interaction is different from those who are extroverted. The way that they view what is considered to be social interaction
                can be different as well. As Susan Cain points out in her TED Talk from 2012, her family’s viewpoint of how they socialize and
                spend time with each other was far different than how those at her summer camp did.</p>
            <br />
            <div className="centerimg">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/c0KYU2j0TM4?start=15"
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <br />
            <p> &emsp; &emsp; Those around her viewed her idea of social interaction as weird, and she was told to be more ‘Rowdy’ and
                extroverted rather than wanting to spend time on her own. While that makes a little more sense for a kid to go and make
                friends, the fact that life for adults is so similar to this summer camp mindset, can often bring a negative association
                to acting more introverted. In the corporate world, people are often encouraged to work in teams, while having small solo
                assignments that contribute to a larger project. While there is nothing wrong with this way of doing projects, the amount
                of time that is spent having to speak with other coworkers or even the project manager can break the flow of productivity for
                those who would rather work alone, or be given more privacy to work on their assignments. As Cain goes on, she goes more in depth
                on other parts of society like this, such as schools and other, more professional places. </p>

            <br />
            <p> &emsp; &emsp; Some examples of the benefits of being introverted and spending more time alone can be seen in Cain’s TED talk,
                regarding how productivity can be increased alongside creativity and one’s ability to think clearly. Another place where the
                benefits of solitude are realized can be taken from Ginny Graves’ Power of Solitude article in Health Magazine. In the article,
                Ginny points out six ways to increase one’s time to think, such as: waking up earlier to spend more time to yourself; purchasing
                an alarm clock instead of using a phone to wake up and not feel the urge to stare at a phone; and to recognize that everyone
                needs some time to themselves.</p>

            <br />
            <div className="centerimg"><img src={relaxingman} alt="Man relaxing at home."></img>
                <p> <em> by Nenad Stojkovic </em>
                </p>
            </div>
            <br />
            <p> &emsp; &emsp; Although it is not very hard to find time for oneself, Some ways that I feel people could find a better way to spend said
                time is by plotting out how to spend their time, a very simple and obvious answer, but most people don’t tend to do this and kind of
                go with the flow, and do whatever they feel like doing. If it were me, I would come up with a list of things I should get done first
                with my time alone, then after finishing anything I set before me, I am free to decide to do whatever without feeling guilty about
                just sitting around. It makes enjoying time alone easier, and it also makes relaxing easier. </p>
            <hr />
            <h2> Work Cited </h2>
            <ul>
                <li> Cain, S. <cite> “Tedtalks: Susan Cain--the power of introverts”.</cite>(2012). TED. Retrieved November 21, 2022, from https://www.ted.com/talks/susan_cain_the_power_of_introverts/transcript?language=en. </li>
                <li> Graves, G. (2020). <cite> The Power of Solitude.</cite> Health, 34(2), 69–75. </li>
            </ul>
        </div>
    );
};

const Part2 = () => {
    return (
        <div className="page-item">
            <h1 className='project3header'><strong>Introvertedness in Active Environments</strong> </h1>
            <hr />
            <p className="dateSub"> December 8th 2022 </p>
            <br />
            <br />
            <p> &emsp; &emsp; When it comes to being introverted, or preferring time alone in order to fully process
                thoughts or ideas, the thought of having to go to a class where the activities and lesson plans are
                spontaneous with participation and discussion being requested before one has the chance to fully process
                what they just learned can be uncomfortable for the introverted. With workplace environments expecting
                their employees to constantly interact and work with their fellow team members, it makes sense for schools
                to try and model their lessons and classes off of this. While this is good for those who are more extroverted,
                introverted people are often left stressed and fatigued by this way of working, and learning.
            </p>
            <br />
            <p> &emsp; &emsp; A research study on Introverts in an active classroom environment proves this to be true with those who
                are truly introverted. Richard Green, Fred Micalli, and Janet Richards conducted a study on 10 students at a community
                college on their active learning classes, and found that all of the students found the classes to be not only exhausting,
                but embarrassing and extremely stressful to them, because of their desire to perform at their expected level
                (Green et Al, 2019). Introverted people are able to handle social situations, but the amount of energy needed
                in order to fully participate in these situations is incredibly draining for them, myself included.
            </p>
            <br />
            <br />
            <div className="centerimg"><img src={activeClass} alt="an active classroom at Queens university" />
                <p> <em> By Queen's university </em></p>
            </div>
            <br />
            <br />
            <p> &emsp; &emsp; The students also found that the Classroom environment was also stressful for these
                students because of how the learning was being conducted. They felt as though the textbook materials
                they had been given at the beginning of the course were almost irrelevant because of how their professors
                were teaching the class, and felt as though their normal style of learning was being discouraged (Green et Al, 2019).
                I believe that this is the college’s way of encouraging students to have to attend classes and participate in these active
                discussions, rather than learning at a pace that they are most comfortable with, and are most effective for them.
            </p>

            <br />
            <p> If there was one thing that was agreed upon between the 10 participants of the study, however, it’s that they all gained
                something valuable from the class (Green et Al). I interpret this as being the skills needed in order to have a successful
                career in our new style of corporate work. As uncomfortable as it is for them, and as nice as it would be to have the
                time to work alone in a workplace environment, Introverts need to have a way to participate in these discussions,
                otherwise they will just be trampled over in their respective environments because of their way of thinking and
                living. However, the workplace should not function as a huge group of people working together all of the time
                either, and I believe that everyone in their company would benefit from not always having to communicate with each
                other, or getting time to privately work on whatever they are assigned without much interference.
            </p>
            <br />
            <br />
            <div className="centerimg"> <img src={busyoffice} alt="Workers in an busy, cluttered office" />
                <p><em> by Ryan Hyde. </em></p>
            </div>
            <br />
            <br />
            <p> &emsp; &emsp; To back this up, the participants of the study often noted how they felt as though there wasn’t
                enough time for them to process the information they were given properly because of how the class was structured.
                In these active learning environments, students are often expected to not only learn the material, but also be able
                to almost instantly have something to say about it right after learning it (Green et Al, 2019). People who are
                introverted often need time to understand what they have learned to the fullest, and being told to come up with a
                thoughtful or educated opinion or question on new material is stressful for them, because they are not given the
                opportunity to comprehend the material.  </p>
            <br />
            <p> &emsp; &emsp; Workplaces are the same, when new ideas for how to direct a project or system for a business are presented
                at meetings, it is often those who are more extroverted who supply the discussion with their ideas or questions over
                introverts because they have not been given enough time to process and fully understand what the pros and cons of this
                newfound idea are. If the workplace were to give their employees more time, they would be able to more freely understand
                and come up with ideas or solutions to projects and assignments, rather than having to constantly come up with solutions
                or questions right away.
            </p>
            <br />
            <hr />
            <h2> Work Cited </h2>
            <br />
            <ul>
                <li> Green, R. L., Milacci, F., & Richards, J. (2019).<cite> Breaking the Silence: A Phenomenological Study of Introverted Undergraduate Students’ Experiences in an Active Learning English Classroom.</cite> Journal of Ethnographic & Qualitative Research, 14(1), 12–24. </li>
            </ul>

        </div>
    )
}

const Part3 = () => {
    return (
        <div className="page-item">
            <h1 className="project3header"> Solitude and Productivity </h1>
            <hr />
            <p className='dateSub'> December 8th, 2022 </p>
            <br />
            <br />
            <p> &emsp; &emsp; One of the main reasons that I myself enjoy time alone is because it allows me to find an
                almost flow-like state where I can focus purely on any projects or assignments I need to get done. Writing
                this very post is also an example of why I enjoy time alone. Throughout this week, my time has been filled
                with projects, homework, and studying for other classes with others. And while this does help me better understand
                the material in those courses, it doesn’t help me get anything done efficiently enough to work on this one.
            </p>
            <br />
            <p> &emsp; &emsp; I find that dedicating one’s day almost entirely to themselves, without trying to actively contact others
                (But responding, if need be), is the best way to make sure that productivity and efficiency are at their max. This may
                make me sound very introverted, but I do not see myself as a true introvert or an asocial person. I do believe that I
                have some traits of introvertedness, and I often take a longer time to understand topics, but once I do, I get a much
                stronger sense of understanding, and that process is faster when I am left to figure it out myself. One thing I do believe
                I possess, however, is the ability of dispositional autonomy. Dispositional Autonomy in a person describes how they
                regulate their emotions and behavior, in this sense it is, for the most part, an almost automated behavior.
            </p>
            <br />
            <p> &emsp; &emsp;According to a study tracing the association between introvertedness, dispositional autonomy, and Solitude
                by Thuy-vy Nguyen, Netta Weinstein, and Richard Ryan, Those with dispositional autonomy traits tend to actually desire
                Solitude because of the benefits that come from being able to dedicate one’s time to whatever they feel necessary.
                While being an introvert correlates to a preference in being alone over in social situations, it doesn’t necessarily
                mean that a person desires to be alone (Nguyen et Al, 2018).
            </p>
            <br />
            <p> &emsp; &emsp; Wanting to be alone doesn’t immediately make someone an introvert or someone who is asocial,
                but those who are introverted and asocial tend to prefer the time alone, because of how they process information
                and expend energy in social situations, much like I said in my last post. Modern College Curriculums and courses
                tend to be taking the approach of placing its students into active environments, where everyone is instructed to
                interact with those around them, even if it doesn’t make them comfortable because that’s what happens in the average
                corporate job.
            </p>
            <br />
            <br />
            <div className="centerimg"><img src={cubicles} alt="Workers in an office at their desks." />
                <p> From hippopx.com </p>
            </div>
            <br />
            <br />
            <p> &emsp; &emsp; But corporate jobs would benefit heavily from allowing their workers to spend more time to themselves.
                One thing that needs to be understood about Dispositional Autonomy is the Autonomy part of it, and how those with the
                traits of someone with Dispositional Autonomy have the ability to go through life with their emotions and behaviors put
                in check Autonomously, which also means that their work can be done autonomously. Something that younger people or people
                who haven’t held office jobs forget is that working in an office isn’t always cooperation between one or more employees.
                Even if that takes up a good amount of the time in the office, there is still the need for workers to get work done
                independently from everyone else, and If a worker is trying to get their tasks or projects done and finds themselves
                getting interrupted by other coworkers a lot, they aren’t going to get anything done.
            </p>
            <br />
            <p> &emsp; &emsp;
                Workers need the time to get things done without their manager or their supervisor constantly bothering them by piling on more work,
                or removing them from their workspace to do something else with them or another employee. Giving those the time to work autonomously,
                without someone getting in their way, would boost the performance and productivity of the workers, just because they were left alone.
            </p>
            <br />
            <hr />
            <br />
            <h2> Work Cited </h2>
            <ul>
                <li>Nguyen, T.-vy T., Weinstein, N., & Ryan, R. (2018). Who enjoys solitude? autonomous functioning (but not introversion) predicts self-determined motivation (but not preference) for solitude. PLoS One, 17(5), 1–18. https://doi.org/10.31234/osf.io/sjcwg </li>
            </ul>

        </div>
    )
}

const Part4 = () => {
    return (
        <div className="page-item">
            <h1 className="project3header"> Introverts in the Workplace </h1>
            <hr />
            <p className="dateSub"> December 12th, 2022</p>
            <br />
            <br />
            <p> 
                &emsp; &emsp; As a continuation of the last blogpost, there is more to giving people the time they need alone and
                their ability to be productive. A person’s ability to be productive when they are alone can also be affected by how
                introverted or extroverted they are. While companies often search for individuals who are more extroverted over those
                who are introverted because of their charisma or communication skills, Introverts are often able to handle different
                types of workloads better than those who are extroverted.</p>
            <br />
            <p> 
                &emsp; &emsp; In a Study conducted by Luz-Eugenia Cox-Fuenzalida, Amanda Angie, Sheri Holloway, and Laura Sohl on the task performance of
                those who are considered to be introverted versus extroverted individuals, the group found that in a 48 minute time span, in the last 32
                minutes of the test it was found that Introverted individuals were better at maintaining their pace and focus on their work far better than
                those who were extroverted. Although in the first 16 minutes of the test both groups were about the same performance wise, introverted individuals
                managed to have a better hold on their ability to focus compared to extroverted individuals, whose brain activity dropped significantly, to
                approximately 42%, compared to the introverted group’s brain activity, which dropped by a much smaller margin than the extroverted group, to about
                58% (Cox-Fuenzalida et Al, 2006). </p>
            <br />
            <p> 
                &emsp; &emsp; This study shows that those who are introverted tend to have a much better time getting what most consider to be menial tasks done
                compared to extroverted individuals. I’m not saying that this makes introverted individuals way better than extroverted individuals when it comes
                to working, but they should be acknowledged far more in the workplace and have their needs accommodated for better than they currently are. </p>

            <br />
            <p> 
                &emsp; &emsp; The thing about being an introvert in the workplace, however, is that these accommodations are unlikely to ever come. The only way
                for introverts to be able to get the recognition they deserve is to do things that are more outside of their nature, and are often considered more
                extroverted activities or actions. Franchise owner Chastity Heyward wrote a Forbes article about how introverted employees are often overlooked
                compared to the extroverted employees, and gives tips on how introverted employees can gain more recognition, such as being more public with their
                achievements as well as stepping out of their comfort zone and putting themselves out there more (Heyward, 2021).
            </p>
            <br />
            <br />
            <div className="centerimg"><img src={meeting} alt="Staff holding a meeting in an office" />
                <p> by Robert Scoble </p>
            </div>
            <br />
            <br />
            <p>
                &emsp; &emsp; Although these go against what most introverts are alright with, she does also mention a couple of other tips that are skills introverts already have,
                such as listening in meetings much more, rather than always talking. Since I have already stated that introverts often take more time to internally digest information,
                but are often far more understanding and comprehend said information better than others, this is one skill that makes sense for introverted employees.
            </p>

            <br />

            <p>
                &emsp; &emsp; All in all, introverted employees are still going to be overlooked by their managers and bosses until they start to act more like extroverts, which in my opinion is
                something that should be changed by those who hold the higher-up positions. If they were to do a better job at actually paying attention to those who put in the extra effort
                and work to get the job done, they would have a better idea of who is doing better than the rest in their company, and give those employees better recognition
                and respect, rather than just paying attention to the employee that is the loudest or interacts with them the most.
            </p>
            <br />
            <br />
            <hr/>
            <h2> Work Cited </h2>
            <br />
            <ul>
                <li> Cox-Fuenzalida, L.-E., Angie, A., Holloway, S., & Sohl, L. (2006). Extraversion and task performance: A fresh look through the workload history lens. Journal of Research in Personality, 40(4), 432–439. https://doi-org.ezp3.lib.umn.edu/10.1016/j.jrp.2005.02.003 </li>
                <br />
                <li> Heyward, C. (2021, August 13). Council post: How introverts can make an impact in their workplaces. Forbes. Retrieved December 12, 2022, from https://www.forbes.com/sites/forbesbusinesscouncil/2021/08/13/how-introverts-can-make-an-impact-in-their-workplaces/?sh=7af8b9374f0c</li>
                </ul>
        </div>
    )
}

const Conclusion = () =>{
    return(
        <div className="page-item">
            <h1 className="project3header"> The Relationship between College and the Workplace </h1>
            <hr/>
            <p className='dateSub'>December 14th, 2022</p>
            <br />
            <br />
            <p> &emsp; &emsp; While most of my posts up until now have focused more on the relationship between solitude, introvertedness, and the workplace,
                 there is a clear tie to college life as well. In the workplace, those who chose to be extroverted get more recognition and thus gain
                  more from their work experience as a whole, since they interact with their co-workers and higher ups more than those who are 
                  introverted, or try to work in solitude more than others. The same could be said about those who are in college. Students who are
                   more extroverted tend to get along better with their peers, and are more likely and willing to reach out to their professors in order
                    to gain more knowledge and experience or to just get to know who is teaching them better. This is something that introverted 
                    students and those who prefer solitude tend to not do. 
            </p>
            <br />
            <p>
                &emsp; &emsp; But that doesn’t mean that introverted students and those who prefer solitude don’t have a way of reaching out and communicating 
                with the people around them, they just do it differently or don’t do it as much as others do. As I explained before, and as several
                 others such as Susan Cain or Richard Green and their fellow researchers described, introverted individuals process information more
                  internally and intensely than extroverted individuals(Cain, 2012)(Green et Al, 2019). I believe that this also means they are often 
                  better at expressing themselves and the knowledge they have. It’s because of their ability to internally process that leads me to also
                   believe that the way they communicate with other people is more planned out and thought about prior to the conversation than most 
                   other people, and communicate with their professors and peers in different, more scholarly ways as well.
            </p>
            <br />
            <p> 
                &emsp; &emsp; I prefer solitude for a similar reason to this. I do not want to spend a lot of time getting to know everyone I meet here in the 
                U because I am not going to know them for very long. But If I can make some valuable connections to me, and use those friendships
                 and connections to network out to places that will help me achieve my goals, then that is what I plan to do. In order to reach 
                 those goals, however, I need to do more than just know people. I also need to have the knowledge and experience to say that I 
                 can be placed in a position where I can attain my goal. In order to do that, I can’t spend all of my time socializing with others, 
                 and I’d prefer to spend as little time as possible with other people when I have things I need to get done. This doesn’t mean that
                  I don’t spend any time with people at all, and I enjoy the time I spend with my friends more the less I see them. I still need to
                   spend time on my own, though, and I do.
            </p>
            <br />
            <p> 
                &emsp; &emsp; I understand that a lot of people, such as a fair amount of my friends and family, would say that spending too much time
                 alone in college is a waste of the college experience, and I admit, It is a bit of a waste, but so is wasting to much time with other
                  people rather than focusing on the classes I’m pouring thousands of dollars and hours into. Utilizing what little time I’ve been given
                   here at the U will be key to how my future pans out. And don’t forget that the real reason most people attend college, it’s to get a
                    job and have a stable future and to make sure that I get the most out of this place and obtain that future, I need to stay focused.
                     And the best way to do that, in my opinion, is to be alone.
            </p>
            <br />
            <br />
            <hr />
            <h2> Work Cited </h2>
            <ul>
                <li> Cain, S.“Tedtalks: Susan Cain--the power of introverts”.(2012). TED. Retrieved November 21, 2022, from https://www.ted.com/talks/susan_cain_the_power_of_introverts/transcript?language=en. </li>
                <br />
                <li>Green, R. L., Milacci, F., & Richards, J. (2019). Breaking the Silence: A Phenomenological Study of Introverted Undergraduate Students’ Experiences in an Active Learning English Classroom. Journal of Ethnographic & Qualitative Research, 14(1), 12–24. </li>
                </ul>
            </div>
    )
}
export { Intro, Part2, Part3, Part4, Conclusion };
