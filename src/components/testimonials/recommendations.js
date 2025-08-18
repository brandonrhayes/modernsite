import Michael from '../../assets/headshots/Michael.jpeg';
import Mo from '../../assets/headshots/Mo.webp';
import Markus from '../../assets/headshots/Markus.jpeg';
import Bogi from '../../assets/headshots/Bogi.webp';
import Akeshala from '../../assets/headshots/Akeshala.jpeg';
import Rajitha from '../../assets/headshots/Rajitha.jpeg';
import Izabella from '../../assets/headshots/Izabella.jpeg';
import recommendationFromNancy from '../../assets/files/LOR/Letter of Recommendation - Nancy Mattys.pdf'
import recommendationFromKevinKelly from '../..//assets/files/LOR/Kevin Kelly - Lor for BH.pdf'
import HarryHall from '../../assets/headshots/harryhall.jpeg'
import recommendationFromHarryHall from '../../assets/files/LOR/Letter of Reference for Brandon Hayes by Harry Hall.pdf'
import recommendationFromHalFraser from '../../assets/files/LOR/Hal Fraser - LoR for BH.pdf'
import KevinKelly from '../../assets/headshots/kevin_kelly.jpeg'
import OrieGood from '../../assets/headshots/OrieGood.jpeg'
import recommendationFromOrieGood from '../../assets/files/LOR/Letter of Reference for Brandon Hayes by Orie Good.pdf'
import recommendationFromMacKhamis from '../../assets/files/LOR/Mac Khamis - LoR for BH.pdf'


export const recommendations = [
  {
    name: "Michael Sheng",
    role: "Software Engineer @ Cut+Dry",
    date: "August 16, 2025",
    relationship: "Michael reported directly to Brandon",
    text: `... I can confidently say [Brandon's] one of the strongest product leaders I’ve ever worked with.

            [He] is incredibly skilled at making data-driven decisions to create the best possible experience for the user.
            He consistently puts the user first, balancing data analytics with real user feedback to ensure each decision 
            in the product roadmap is rooted in evidence. \n\n
            

            Brandon is also a very strong communicator and leader. 
            He is able to simplify complex vision into very clear, actionable direction that aligns everyone around him.

            Above all, Brandon leads with passion and loyalty. As an engineer on his team, Brandon fosters an environment
            where people feel supported and driven to do their best work.`,
    source: "Recommendation",
    sourceType: "linkedin",          // 'linkedin' or 'file'
    sourceUrl: "https://linkedin.com/in/brandonrhayes",
    avatar: Michael
    
  },
  {
    name: "Mohamad Agha",
    role: "Senior Software Engineer @ Cut+Dry",
    date: "August 16, 2025",
    relationship: "Mohamad reported directly to Brandon",
    text: `Working with Brandon at Cut+Dry was one of the most rewarding experiences of my career. 
            As Product Lead, he had a clear and compelling vision for the platform’s direction; one that
            inspired confidence and consistently resulted in products our customers truly valued.

            Under his leadership, there was never a day I felt bored or disconnected from the work. 
            Every feature we built was exciting, meaningful, and a step toward solving hard problems
            that had long gone unanswered in our space. His approach made it easy to trust that following 
            his lead would take us to the right product outcomes.

            Brandon had a rare ability to turn complex product and business challenges into solutions
            that were both highly usable and strategically impactful. From tools that made our platform more 
            valuable to all stakeholders, to initiatives that brought key partners deeper into our ecosystem,
            his work consistently elevated the product and strengthened its position in the market.

            I always believed in his ability to create user-friendly, feature-rich products, and time and again,
            he delivered. Brandon is a leader with vision, execution, and the kind of energy that makes you look
            forward to the next day.`,
    source: "Recommendation",
    sourceType: "linkedin",          // 'linkedin' or 'file'
    sourceUrl: "https://linkedin.com/in/brandonrhayes",
    avatar: Mo
  },
  {
    name: "Rajitha Wanshika",
    role: "Software Engineer @ Cut+Dry",
    date: "August 15, 2025",
    relationship: "Rajitha reported directly to Brandon",
    text: `... From the beginning, [Brandon] created an environment where engineers could consistently do their best work by balancing
            trust and autonomy with a clear vision... His leadership style empowered me to take ownership
            of high-impact initiatives, knowing I had his full support and guidance when navigating challenges.
            Under his direction, I successfully led several major initiatives, making ... engaging
            brands and distributors in a flywheel possible. Brandon’s ability to align stakeholders, set clear priorities, 
            and proactively remove roadblocks ensured these projects were delivered on time and achieved measurable business impact. \n\n
            
            His rare combination of technical understanding and leadership capability truly sets Brandon apart.
            ... [He has a] profound grasp of technical concepts [that allow] him to provide precise,
            actionable feedback, accelerating problem-solving... His leadership is always results-driven
            and outcome-focused, yet never at the expense of team morale or collaboration. Brandon stands shoulder-to-shoulder
            with the team during challenges, ensuring we move forward together.

            I’m genuinely sad that Brandon departed Cut+Dry just as I’m about to release a major platform improvement.
            He made it possible in the first place and showed me why it was so important for us to move forward. 
            Beyond product delivery, Brandon has been a thoughtful mentor, regularly checking in on my professional growth and
            overall well-being. His feedback was always constructive, specific, and actionable, which helped me develop as an
            engineer...`,
    source: "Recommendation",
    sourceType: "linkedin",          // 'linkedin' or 'file'
    sourceUrl: "https://linkedin.com/in/brandonrhayes",
    avatar:  Rajitha
  },
  {
    name: "Izabella Garcia",
    role: "Product Marketing @ Cut+Dry",
    date: "August 14, 2025",
    relationship: "Izabella worked with Brandon, but on different teams",
    text: `I really enjoyed working with Brandon at Cut+Dry! As his PMM counterpart, I appreciated how
            easy he made collaboration - we always had great discussions about strategy and next steps,
            and he has a gift for breaking down complex concepts and sharing the technical details behind
            product decisions, which made my job significantly easier.

            Brandon is incredibly smart and strategic, always keeping everyone informed on his progress.
            He amazed me leading two major projects - our AI tool development and expanding the manufacturer
            side of the business. He thinks deeply about the "why" and "how" behind every decision, then
            executes quickly and effectively. His ability to move from strategic thinking to fast
            implementation is really impressive.

            Brandon is the kind of product manager who makes cross-functional work actually enjoyable - 
            I'd jump at the chance to work with him again!`,
    source: "Recommendation",
    sourceType: "linkedin",          // 'linkedin' or 'file'
    sourceUrl: "https://linkedin.com/in/brandonrhayes",
    avatar: Izabella
  },
  {
    name: "Akeshala Marasinghe",
    role: "Senior Software Engineer @ Cut+Dry",
    date: "August 14, 2025",
    relationship: "Akeshala reported directly to Brandon",
    text: `I had the privilege of working closely with Brandon in a pod he led that focused on ideating, 
            developing, and launching a space for brands to engage more effectively with operators. 
            At the time, I was a junior engineer, and Brandon fostered a collaborative and supportive
            environment that allowed me to grow. He consistently valued the engineering perspective,
            making it easier for the team to approach complex problems. One of Brandon’s standout
            qualities is his attention to detail—whenever he introduced an idea, it was thoroughly
            thought through, well-documented, and easy for [us] to translate into action.`,
    source: "Recommendation",
    sourceType: "linkedin",          // 'linkedin' or 'file'
    sourceUrl: "https://linkedin.com/in/brandonrhayes",
    avatar: Akeshala
  },
  {
    name: "Bogika Siriwardana",
    role: "Product Designer @ Cut+Dry",
    date: "May 4, 2025",
    relationship: "Bogika reported directly to Brandon",
    text: `I had the privilege of working under Brandon’s leadership, and it quickly became clear that he was more than
            just a strong contributor. He was a force who elevated everyone around him. He brought a rare combination
            of clear vision, strategic and logical thinking, and a strong sense of perfectionism (though I’ll admit, 
            sometimes that perfectionism could be a little intense 😄), which enabled him to lead teams through complex
            challenges with confidence and cohesion.

            Whether navigating abstract problems or shaping actionable solutions,
            he consistently demonstrated thoughtfulness, adaptability, and a future-focused mindset. His ability to connect
            the dots across technology, people, purpose, and feedback was something I truly admired.

            If you’re looking for a leader who not only drives results but also brings out the best in those around him, 
            Brandon was that person. I’m grateful for the experience of working with him and look forward to seeing the
            continued impact he’ll have wherever he goes.`,
    source: "Recommendation",
    sourceType: "linkedin",          // 'linkedin' or 'file'
    sourceUrl: "https://linkedin.com/in/brandonrhayes",
    avatar: Bogi
  },
  {
    name: "Markus Hamann",
    role: "Co-Founder @ CloudSafaris",
    date: "January 23, 2019",
    relationship: "Markus worked with Brandon on the same team",
    text: `Brandon is a natural-born leader who can create a clear vision for a team's success and allow individuals to reach
            new heights with their performance. He is a highly motivated thinker who can find solutions to both analytical and
            abstract problems. With a conscious mindset that understands the impact technology will have in the future, I am
            excited to see the great contributions Brandon will make.`,
    source: "Recommendation",
    sourceType: "linkedin",          // 'linkedin' or 'file'
    sourceUrl: "https://linkedin.com/in/brandonrhayes",
    avatar: Markus
  },
  {
    name: "Nancy Mattys, B..A, B.Ed.",
    role: "Student Council Advisor, English Teacher",
    date: "January 23, 2017",
    relationship: "Brandon reported directly to Nancy",
    text: `... [Brandon] is a remarkable young man with many great attributes that will make an outstanding asset to your establishment.
            I have known [him] since 2012 when he was a student in my Grade 10 Academic English class.  He has always been
            determined to improve his skills and to produce high quality work... Brandon especially
            excelled with group projects where he frequently took a leadership role.

            Brandon’s leadership skills were also used when he became involved with Student Council... and project manager for 
            our spirit clothing...  He independently contacted various vendors to find the best
            quality product with the best price... Brandon also worked on advertising the sales campaign,
            coordinated ... orders, and worked on distribution. His support ... was enthusiastic and contagious. 

            It is very easy to speak highly of this young man.  He is respectful, hardworking, enthusiastic, cooperative, kind,
            creative and innovative. He takes instruction well, learns quickly, takes responsibility for projects and follows through. ...
`,
    source: "Recommendation",
    sourceType: "file",
    sourceUrl: recommendationFromNancy
  },

  {
    name: "Kevin Kelly",
    role: "CFO & EVP, Finance and Commercial Services @ Bruce Power",
    date: "June 23, 2015",
    relationship: "Kevin was senior to Brandon but didn't manage directly",
    text: `... [Brandon] joined both Finance and Supply Chain divisions at Bruce Power ... to explore ... opportunities within
            the Commercial Services side of a large company. ... [My] organization shared nothing less than positive words 
            on his behalf.

            Brandon demonstrated a high level of organization on a regular basis while tracking various tasks simultaneously.
            He often supported the creation and enrollment of a large system to better our Financial processes. In doing so,
            Brandon demonstrated he champions learning and development opportunities while he functioned to achieve success
            with other employees in order to progress the project. It was evident Brandon believed that no work was menial
            as he worked diligently to complete any task. ...

            ... Brandon further worked independently on behalf of Supply Chain's
            Warehouse Management division in order to bring our Compressed Gas Storage Facility up to a higher standard.
            He frequently demonstrated a relentless pursuit for excellence by always pushing the completion of tasks,
            and going beyond the call of duty in the interest and safety of himself, other employees, and the company.
            Although Brandon will not see the completion of this project during his term, the momentum he has put into
            the mission will drive the project to completion and in the future lead by example...`,
    source: "Recommendation",
    sourceType: "file",
    sourceUrl: recommendationFromKevinKelly,
    avatar: KevinKelly
  },{
    name: "Harry Hall",
    role: "Vice President, Supply Chain @ Bruce Power",
    date: "June 18, 2015",
    relationship: "Harry was senior to Brandon but didn't manage directly",
    text: `... During [Brandon's] time at Bruce Power Brandon has demonstrated initiative, team work, and patience while being assigned
            various activities within both [finance and supply chain]. In particular he distinguished himself in supporting the Supply
            Chain Warehouse team in reorganizing the Compressed Gas Storage area to become more streamlined and efficient.

            His safety conscious drive, determination, and high standards coupled to an uncompromising vision of excellence
            were noted by all who worked with him on this project. The work he accomplished will provide a model for other on-site 
            [facilities].

            As an individual Brandon proved reliable and exceptionally responsible, regularly volunteering to jump in and
            support any task. While working in Finance he demonstrated an ability to multi-task, balancing various activities
            without dropping any balls. Key to Brandon's success is his strong communication skills, his willingness to ask
            questions while communicating progress, problems and potential delays with many on-going events. Brandon is an
            intelligent personable young man who was well liked by all in the workplace...`,
    source: "Recommendation",
    sourceType: "file",
    sourceUrl: recommendationFromHarryHall,
    avatar: HarryHall
  },
  {
    name: "Hal Fraser",
    role: "Department Manager, Supply Chain @ Bruce Power",
    date: "June 18, 2015",
    relationship: "Brandon reported directly to Hal",
    text: `... While at Bruce Power, Brandon provided his admirable work ethic to many activities.
            ... Upgrading our Compressed Gas Storage Facility to a higher standard was one of the major
            projects that Brandon independently pushed to complete on behalf of [my team]. 
            Even when faced with obstacles, Brandon walks the talk to ensure that he continuously
            demonstrates uncompromising high standards. It was clear that Brandon looked for ways to improve
            our storage practices, and as such has raised the bar...

            ... Brandon was very reliable and exhibited exceptional maturity in his
            willingness to jump in and support any task. A key to Brandon's success is his strong communication
            skills which he continually demonstrated in communicating progress, problems and potential delays
            with many on-going projects...`,
    source: "Recommendation",
    sourceType: "file",
    sourceUrl: recommendationFromHalFraser,
  },
  {
    name: "Mac Khamis, CPA, CMA, B.A. (Hons), Dip. MRS",
    role: "Plant Controller - Finance @ Bruce Power",
    date: "June 12th, 2015",
    relationship: "Mac was senior to Brandon but didn't manage directly",
    text: `Brandon ... joined our Finance team at Bruce Power in mid-April ... [and] ... 
            took over the responsibility to compile and issue a set of weekly reports on a high-profile
            initiative for our company ... from an outgoing college ... student. \n\n
            
            Brandon was quick to get up to speed on the reports and they were always issued on a timely basis to a
            high quality standard. Brandon was always conscientious in keeping me informed of any potential data issues
            impacting the reports and displayed a good questioning attitude when the dataset for one of the crews was
            distorted to due to a system permissions issue which was quickly cleared up. ...`,
    source: "Recommendation",
    sourceType: "file",
    sourceUrl: recommendationFromMacKhamis,
  },
  {
    name: "Orie Good",
    role: "Bruce A Rapid Response Engineering @ Bruce Power",
    date: "May 20th, 2015",
    relationship: "Brandon reported directly to Orie",
    text: `Brandon worked with the Bruce A Rapid Response Engineering Team (RRET) ... to identify his preferred education
            and career path, and to gain real world experience in a
            fast paced and highly demanding work environment. Brandon demonstrated exceptional written and
            communication skills while co-authoring a formal letter of support addressed to the Canadian Nuclear
            Safety Commission on behalf of the North American Young Generation of Nuclear.

            While working with Brandon I was often taken by the high level of professionalism he routinely
            demonstrated and by the speed at which he took to new concepts; digesting and applying them all while
            being self-critical and challenging the material presented to him. His expressed confidence allowed him
            to be actively engaged in ongoing challenges faced by RRET which further accelerated his understanding
            and learning.

            I am confident that Brandon has the innate skills and abilities that will make him successful in all future
            endeavors. This, again coupled with his eager attitude and ability to digest new information, will allow him
            to meet continued challenges and develop into an integral member of any company.`,
    source: "Recommendation",
    sourceType: "file",
    sourceUrl: recommendationFromOrieGood,
    avatar: OrieGood
  }
];