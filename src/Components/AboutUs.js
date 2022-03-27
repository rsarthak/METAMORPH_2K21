import React, { useRef, useEffect } from "react";
import "../css/AboutUs.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



function AboutUs() {

  // useEffect(() => {
  //   // gsap.fromTo(".content", {opacity: 0}, {opacity: 0.5, duration: 1});
  //   // gsap.fromTo(".content", {x: -500,y:200}, {x:0,y:400, duration: 1});
  gsap.registerPlugin(ScrollTrigger);
  // const circleRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 400) {
      gsap.fromTo(
        ".content4",
        {
          x: 100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content4",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content4",
          },
        }
      );


      gsap.fromTo(
        ".content5",
        {
          x: -100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content5",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content5",
          },
        }
      );

      gsap.fromTo(
        ".content1",
        {
          x: -100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content1",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content1",
          },
        }
      );

      gsap.fromTo(
        ".content2",
        {
          x: 100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content2",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content2",
          },
        }
      );

      gsap.fromTo(
        ".content3",
        {
          x: -100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content3",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content3",
          },
        }
      );


      gsap.fromTo(
        ".content6",
        {
          x: 100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content6",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content6",
          },
        }
      );


      gsap.fromTo(
        ".content7",
        {
          x: -100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content7",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content7",
          },
        }
      );


      gsap.fromTo(
        ".content8",
        {
          x: 100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content8",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content8",
          },
        }
      );


      gsap.fromTo(
        ".content9",
        {
          x: -100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content9",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content9",
          },
        }
      );

      gsap.fromTo(
        ".content9",
        {
          x: -100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content9",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content9",
          },
        }
      );

      gsap.fromTo(
        ".content10",
        {
          x: 100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content10",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content10",
          },
        }
      );
      gsap.fromTo(
        ".content11",
        {
          x: -100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content11",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content11",
          },
        }
      );
      gsap.fromTo(
        ".content12",
        {
          x: 100,
          opacity: 0,
          duration: .5,
          ease: "bounce",
          delay: 0.8,
          scrollTrigger: {
            trigger: ".content12",
          },
        },
        {
          x: 0,
          opacity: 1,
          duration: .5,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".content12",
          },
        }
      );
    }
  }, []);

  return (
    <div className="journey">
      <h1 id="timetop" style={{ paddingTop: "12vh" }}>
        Journey of Our Team
      </h1>
      <div class="timeline">
        <ul>
          <li>
            <div class="content1">
              <h3>How was Meta Morph Established?</h3>
              <p id="paratime">
                <br />The B. Tech. Programme in Materials Science and Engineering (MSE) started in the year 2017. Following this, Team Meta Morph was established by the first batch of B.Tech. MSE with the primary motive to facilitate novel interdisciplinary developments in the field of Materials Engineering and Materials Science both within the institute and beyond its walls. The name of the Team has its roots in the wonderful class of novel materials known as Metamaterials – materials that showcase properties deviating from conventional standards. Our team had a distinct perception and vision. The desire to be unique in our endeavours has always been a natural disposition of the members of our team, and we proved the same during our first debut in NIMBUS 2019.


{" "}
              </p>
            </div>
            <div class="time">
              <h4>December 2018</h4>
            </div>
          </li>

          <li>
            <div class="content2">
              <h3>Preparations for NIMBUS 2K19</h3>
              <p id="paratime">
                January 2019 witnessed the official declaration of Team Meta Morph as a Departmental Team of Materials Science and Engineering. There was a certain zeal nucleating within the team, a zeal to participate and contribute. The prospect of representing the Department of MSE in a national-level fest for the first time seemed daunting, but also challenging. Nevertheless, we contributed our best, working constantly during both day and night during those critical months.              </p>
            </div>
            <div class="time">
              <h4>January 2019</h4>
            </div>
          </li>
          <li>
            <div class="content5">
              <h3>Our Achievements in NIMBUS 2019</h3>
              <p id="paratime">
              We achieved a Lot in NIMBUS 2019. We gained a lot of new experiences that we have never experienced in Life. We learned several New Technology, Software, and new skills that helped us in our lives. We got the award for the BEST DEBUT TEAM IN NIMBUS 2019. Getting an award in the Very first year was an amazing experience for our Team. Also, our 3 Research Projects got shortlisted for MSRI.              </p>
            </div>
            <div class="time">
              <h4>February 2019</h4>
            </div>
          </li>
          <li>
            <div class="content3">
              <h3>The Projects that we Made in NIMBUS 2K19</h3>
              <p id="paratime">
                We made Several Projects that year like:
              <br />

                <i class="fa fa-star" aria-hidden="true"></i> Piezo-Electric Pathway<br />
              Magnetic Ink <i class="fa fa-star" aria-hidden="true"></i>  <br />
                <i class="fa fa-star" aria-hidden="true"></i> Ferro-Fluid  <br />
              Super Capacitor <i class="fa fa-star" aria-hidden="true"></i>  <br />

                <i class="fa fa-star" aria-hidden="true"></i> Zirconia  <br />
              Hydrophobic surface <i class="fa fa-star" aria-hidden="true"></i > <br />

                {" "}
              </p>
            </div>
            <div class="time">
              <h4>April 2019</h4>
            </div>
          </li>

          <li>
            <div class="content4">
              <h3>What we did in NIMBUS 2019</h3>
              <p id="paratime">
                In Nimbus 2019 we organized several events Like Foam Glider,SlingShot etc,We organized a Workshop in collaboration with TEAM Hermetica, and Team Vibhav.The workshop was very succesful and it had a participation of 130+ students.{" "}
              </p>
            </div>
            <div class="time">
              <h4>May 2019</h4>
            </div>
          </li>

          <li>
            <div class="content5">
              <h3>Our Achievements in NIMBUS 2019</h3>
              <p id="paratime">
              We achieved a Lot in NIMBUS 2019.We gained a lot of new Experiences that we have never experienced in Life.We learnt several New Technology,Software and new skills that helped us in our lives.We got The award for the BEST DEBUT TEAM IN NIMBUS 2019.Getting an award in the Very first year was an amazing experience for our Team.Also our 3 Research Projects got shortlisted For MSRI.
              </p>
            </div>
            <div class="time">
              <h4>May 2019</h4>
            </div>
          </li>

          <li>
            <div class="content6">
              <h3>Plans for NIMBUS 2020</h3>
              <p id="paratime">
              We had planned a lot of new projects and events for NIMBUS 2020. We prepared to the best of our abilities. An excited team, looking forward to Nimbus 2020 was left heartbroken as the college transitioned to online mode of study in March 2020 due to the Corona Virus.               </p>
            </div>
            <div class="time">
              <h4>September 2019</h4>
            </div>
          </li>

          <li>
            <div class="content7">
              <h3><i class="fa fa-bomb " aria-hidden="true"></i> CORONA <i class="fa fa-bomb" aria-hidden="true"></i> </h3>
              <p id="paratime">
              It was on March 15th 2020, when the college released the official notice for immediate vacancy of the hostels. The unprecedented vacation was informed to be of 15 days, which kept extending every month. It was in April when we finally had to face the reality and depth of the situation and NIMBUS 2020 Was cancelled.              </p>
            </div>
            <div class="time">
              <h4>17 March 2020</h4>
            </div>
          </li>

          <li>
            <div class="content8">
              <h3>Announcement of NIMBUS 2021 </h3>
              <p id="paratime">
              With the announcement of Nimbus 2021, the team was once again filled with zeal and excitement. Abhay Raj Singh and Parshant Bhardwaj were appointed as the new club coordinators for the year 2021. {" "}</p>
            </div>
            <div class="time">
              <h4>December 2020</h4>
            </div>
          </li>

          <li>
            <div class="content9">
              <h3>Second Year Interviews</h3>
              <p id="paratime">
                It was a very challenging and tiresome task to Select the best students from the interview as our Executive members.As they have to coordinate work with first year which was a challenging task.But we Still found out 14 Executive members who were interested in working with our team.Each and every member had some skills that can be used by our team.They are always eager to help us whenever we need them.{" "}
              </p>
            </div>
            <div class="time">
              <h4>December 2020</h4>
            </div>
          </li>

          <li>
            <div class="content10">
              <h3>Preparations for Nimbus 2021</h3>
              <p id="paratime">
              After the selection procedure was completed, an Orientation with our Executive Members was organized. We explained to them the ideas that we had and a thorough discussion on their inputs was conducted. Finally, a few ideas were selected and we started to work on the same.              </p>
            </div>
            <div class="time">
              <h4>January 2021</h4>
            </div>
          </li>

          <li>
            <div class="content11">
              <h3>Interviews for 1st Year</h3>
              <p id="paratime">
              The Interviews for freshers were conducted by the Executive Members. After two days of shortlisting, we selected our volunteers for the year 2020-21. We conducted an orientation for them before we started working. As the freshers were inexperienced, it was a tough task to teach them about the software that we were using and the technologies that we used in our projects. Our Executive members with their hard work and efforts were able to teach everything to the volunteers from the basics to the advanced level. They learned many new things and were excited to learn more.              </p>
            </div>
            <div class="time">
              <h4>February 2021</h4>
            </div>
          </li>

          <li>
            <div class="content12">
              <h3>Conducted Workshop (2 Sessions)</h3>
              <p id="paratime">
              This year we successfully conducted a workshop on MATERIAL CHARACTERISATION TECHNIQUES. This workshop focused mainly upon the applications of material characterization, principle, and application of optical microscope, SEM, and TEM. On the first day, we had a participation of 89, and the next day we had a participation of 63. The workshop was praised by many people. We distributed the PPTs and study materials to the students who wanted the PPTs for future reference.              </p>
            </div>
            <div class="time">
              <h4>March 2021</h4>
            </div>
          </li>

          <li>
            <div class="content12">
              <h3>Guest Lecture</h3>
              <p id="paratime">
              Dr. Vijay Kumar Thakur is a multifaceted and dedicated professional with a vigorous personality. In his academic career, he has published 200 SCI journal research articles and holds 1 United State patent. He has also published 50 books and 40 book chapters, like the prominent book cellulose-based graft copolymers, applied materials today, and many more. This Nimbus we are honored to have the recipient of numerous prestigious awards and one of the astounding alumni of our Institute Dr. Vijay Kumar Thakur.              </p>
            </div>
            <div class="time">
              <h4>April 2021</h4>
            </div>
          </li>

          <li>
            <div class="content12">
              <h3>Meta Morph Website Launch</h3>
              <p id="paratime">
              This year will see the launch of our website. The Website is developed by <span style={{fontSize:"40px"}}><a href="https://github.com/metamorphnimbus" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a> </span>MetaMorph Web Development Team. The team is led by <b>Abhay Raj Singh (GSoC'2020@Inkscape)</b>  with<b> Premashish Ghosh</b> and <b>Rahul Bhatia </b>as the Executive Members and Arpit, Sarthak, Deepanshu, Porash, and Manish as Volunteers. The website contains our Projects, Events, Workshops, etc. The Website is fast and simple. We plan to organize all our future events on this platform itself              </p>
            </div>
            <div class="time">
              <h4>April 2021</h4>
            </div>
          </li>

          <li>
            <div class="content12">
              <h3>Organised Events</h3>
              <p id="paratime">
                <i class="fa fa-star" aria-hidden="true"></i>Zoomed in<br />
                <i class="fa fa-star" aria-hidden="true"></i>What a Drag<br />
                <i class="fa fa-star" aria-hidden="true"></i>Alchemist<br /> {" "}
              </p>
            </div>
            <div class="time">
              <h4>April 2021</h4>
            </div>
          </li>
          <li>
            <div class="content12">
              <h3>NIMBUS 2021</h3>
              <p id="paratime">
                Team Meta Morph is Ready for NIMBUS 2K21.<br />" <i class="fa fa-snowflake" aria-hidden="true"></i> Stay Connected-----Stay Safe"  <i class="fa fa-snowflake" aria-hidden="true"></i> <br /> <i class="fa fa-quote-left" aria-hidden="true"></i> TEAM META MORPH <i class="fa fa-quote-right" aria-hidden="true"></i> {" "}
              </p>
            </div>
            <div class="time">
              <h4>April 2021</h4>
            </div>
          </li>
          <div style={{ clear: "both" }}></div>

          <li>
            <div class="content12">
              <h3>Conclusion 2021</h3>
              <p id="paratime">
              We acquired a lot of informative knowledge this year. We learn how to combine different disciplines of science to help mankind in different ways. We perform various simulation based projects, and new technology.

              </p>
            </div>
            <div class="time">
              <h4>April 2021</h4>
            </div>
          </li>
          <li>
            <div class="content12">
              <h3>NIMBUS 2021</h3>
              <p id="paratime">
              Short video series on Instagram page on "Advancement in food packaging technology".
In this we see how innovative food packaging techniques help us to prolong shelf life and maintain the quality and to regulate freshness of food products.
<br />" <br />  {" "}
              </p>
            </div>
            <div class="time">
              <h4>May 2021</h4>
            </div>
          </li>
          <div style={{ clear: "both" }}></div>
          <li>
            <div class="content12">
              <h3>Conclusion 2021</h3>
              <p id="paratime">
              We acquired a lot of informative knowledge this year. We learn how to combine different disciplines of science to help mankind in different ways. We perform various simulation based projects, and new technology.

              </p>
            </div>
            <div class="time">
              <h4>April 2021</h4>
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
