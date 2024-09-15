import React from "react";
import "./CoursesPage.css";
import { Link } from "react-router-dom";
import HomePage from "./../Home/HomePage";
import myImage from "../../assets/customersImgs/cust5Heigh.png";
import learnerOne from "../../assets/customersImgs/cust2.png";
import asideImage from "../../assets/course2.png";

export default function CoursesPage() {
  return (
    <div className="courses-page">
      <div className="container">
        <div className="content">
          <div className="links mt-4">
            <Link className=" mx-3 home" to={HomePage}>
              Home
            </Link>
            <span>&gt;</span>
            <Link className=" mx-3 category" to={CoursesPage}>
              Categories
            </Link>
            <span>&gt;</span>
            <Link className=" mx-3 user" to={"#"}>
              Introduction to User Experience Design
            </Link>
          </div>
          <div className="section1 mt-5 mb-2">
            <h1 className="">Introduction to User Experience Design</h1>
            <p className=" mt-3">
              This course is meticulously crafted to provide you with a
              foundational understanding of the principles, methodologies, and
              tools that drive exceptional user experiences in the digital
              landscape.
            </p>
            <div className="rating mb-3">
              <span className=" rate pe-2">4.6</span>
              <i className="star fa-solid fa-star"></i>
              <i className="star fa-solid fa-star"></i>
              <i className="star fa-solid fa-star"></i>
              <i className="star fa-solid fa-star"></i>
              <i className="star fa-solid fa-star"></i>
              <span className="no_rate px-2">(651651 rating)</span>
              <span className="desc">
                | 22 Total Hours. 155 Lectures. All levels
              </span>
            </div>
            <div className="user_details">
              <img src={myImage} alt="user" />
              <span className="userName">
                Created by <span className="user_name">Ronald Richards</span>
              </span>
            </div>
            <div className="lang mt-3">
              <i class="globe fa-solid fa-globe fs-5"></i>
              <span className="language ms-2">
                English, Spanish, Italian, German
              </span>
            </div>
          </div>
          {/* section1 */}
          <div className="section2 mt-5">
            <div className="btn pe-3 mb-4">
              <button className=" mx-4 px-4 py-2 border-0">Description</button>
              <button className=" mx-4 px-4 py-2">Instructor</button>
              <button className=" mx-4 px-4 py-2">Syllabus</button>
              <button className=" mx-4 px-4 py-2">Reviews</button>
            </div>
            <div className="course_desc">
              <h4 className=" text-dark fw-bold">Course Description</h4>
              <p className=" mb-5">
                This interactive e-learning course will introduce you to User
                Experience (UX) design, the art of creating products and
                services that are intuitive, enjoyable, and user-friendly. Gain
                a solid foundation in UX principles and learn to apply them in
                real-world scenarios through engaging modules and interactive
                exercises.{" "}
              </p>
            </div>
            <div className="certification">
              <h4 className=" text-dark fw-bold">Certification</h4>
              <p>
                At Byway, we understand the significance of formal recognition
                for your hard work and dedication to continuous learning. Upon
                successful completion of our courses, you will earn a
                prestigious certification that not only validates your expertise
                but also opens doors to new opportunities in your chosen field.
              </p>
            </div>
            <div className="instructor mt-5">
              <h4 className=" text-dark fw-bold">Instructor</h4>
              <h3 className=" mt-4 fw-bolder text-primary fs-5">
                Ronald Richards
              </h3>
              <h5 className=" fs-6">UI/UX Designer</h5>
              <div className="ins_info">
                <img src={myImage} alt="instructor" />
                <div className="ins_details ms-4 mt-3">
                  <div className="review">
                    <i className=" pe-2 fa-brands fa-algolia"></i>
                    <span>40,445 Reviews</span>
                  </div>
                  <div className="student">
                    <i className=" pe-2 fa-solid fa-graduation-cap"></i>
                    <span>500 Students</span>
                  </div>
                  <div className="courses">
                    <i className=" ps-1 pe-2 fa-solid fa-play"></i>
                    <span>15 Courses</span>
                  </div>
                </div>
              </div>
              <p className=" mt-4">
                With over a decade of industry experience, Ronald brings a
                wealth of practical knowledge to the classroom. He has played a
                pivotal role in designing user-centric interfaces for renowned
                tech companies, ensuring seamless and engaging user experiences.
              </p>
            </div>
            <div className="syllabus mb-5">
              <h4 className=" text-dark fw-bold">Syllabus</h4>
              <div className="ux_design mt-5">
                <select className="">
                  <option className=" fw-bolder">
                    Introduction to UX Design
                  </option>
                </select>
                <div className="ux_details">
                  <span className=" me-4 fw-medium">5 Lessons</span>
                  <span className="fw-medium">1 hour</span>
                </div>
              </div>
              <div className="ux_design mt-5">
                <select className="">
                  <option className=" fw-bolder">
                    Basics of User-Centered Design
                  </option>
                </select>
                <div className="ux_details">
                  <span className=" me-4 fw-medium">5 Lessons</span>
                  <span className="fw-medium">1 hour</span>
                </div>
              </div>
              <div className="ux_design mt-5">
                <select className="">
                  <option className=" fw-bolder">
                    Elements of User Experience
                  </option>
                </select>
                <div className="ux_details">
                  <span className=" me-4 fw-medium">5 Lessons</span>
                  <span className="fw-medium">1 hour</span>
                </div>
              </div>
              <div className="ux_design mt-5">
                <select className="">
                  <option className=" fw-bolder">
                    Visual Design Principles
                  </option>
                </select>
                <div className="ux_details">
                  <span className=" me-4 fw-medium">5 Lessons</span>
                  <span className="fw-medium">1 hour</span>
                </div>
              </div>
            </div>
            <h4 className=" mb-5 text-dark fw-bold">Learner Reviews</h4>
            <div className=" mt-3 learner_reviews">
              <div className=" learner_rate ">
                <div className="learner_rate_no">
                  <i className=" fs-2 star fa-solid fa-star"></i>
                  <span className=" ms-2 fs-4 fw-bolder">4.6</span>
                  <sub className=" ms-2 fs-5">146,951 reviews</sub>
                </div>
                <div className=" mt-3 five_stars">
                  <i className=" me-1 star fa-solid fa-star"></i>
                  <i className=" me-1 star fa-solid fa-star"></i>
                  <i className=" me-1 star fa-solid fa-star"></i>
                  <i className=" me-1 star fa-solid fa-star"></i>
                  <i className=" me-1 star fa-solid fa-star"></i>
                  <span className=" ms-2 fs-6">80%</span>
                </div>
                <div className=" mt-2 four_stars">
                  <i className=" me-1 star fa-solid fa-star"></i>
                  <i className=" me-1 star fa-solid fa-star"></i>
                  <i className=" me-1 star fa-solid fa-star"></i>
                  <i className=" me-1 star fa-solid fa-star"></i>
                  <i className=" star_empty me-1 star fa-solid fa-star"></i>
                  <span className=" ms-2 fs-6">10%</span>
                </div>
                <div className=" mt-2 three_stars">
                  <i className=" me-1 star fa-solid fa-star"></i>
                  <i className=" me-1 star fa-solid fa-star"></i>
                  <i className=" me-1 star fa-solid fa-star"></i>
                  <i className=" star_empty me-1 star fa-solid fa-star"></i>
                  <i className=" star_empty me-1 star fa-solid fa-star"></i>
                  <span className=" ms-2 fs-6">5%</span>
                </div>
                <div className=" mt-2 two_stars">
                  <i className=" me-1 star fa-solid fa-star"></i>
                  <i className=" me-1 star fa-solid fa-star"></i>
                  <i className=" star_empty me-1 star fa-solid fa-star"></i>
                  <i className=" star_empty me-1 star fa-solid fa-star"></i>
                  <i className=" star_empty me-1 star fa-solid fa-star"></i>
                  <span className=" ms-2 fs-6">3%</span>
                </div>
                <div className=" mt-2 four_stars">
                  <i className=" me-1 star fa-solid fa-star"></i>
                  <i className=" star_empty me-1 star fa-solid fa-star"></i>
                  <i className=" star_empty me-1 star fa-solid fa-star"></i>
                  <i className=" star_empty me-1 star fa-solid fa-star"></i>
                  <i className=" star_empty me-1 star fa-solid fa-star"></i>
                  <span className=" ms-2 fs-6">2%</span>
                </div>
              </div>
              <div className="theLearners">
                <div className="learner_comments">
                  <div className="learner1">
                    <div className="learner_img_name">
                      <img src={learnerOne} alt="learner1" />
                      <span className=" fw-bold ms-3">Mark Doe</span>
                    </div>
                    <div className="learner1_comment">
                      <div className="learner1_rate">
                        <i className=" fs-6 star fa-solid fa-star"></i>
                        <span className=" ms-1 fs-6 fw-bolder">5</span>
                        <span className=" ms-5 review_date">
                          Reviewed on 22nd March, 2024
                        </span>
                        <div className="learner1_paragraph">
                          <p>
                            I was initially apprehensive, having no prior design
                            experience. But the instructor, John Doe, did an
                            amazing job of breaking down complex concepts into
                            easily digestible modules. The video lectures were
                            engaging, and the real-world examples really helped
                            solidify my understanding.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="learner1">
                    <div className="learner_img_name">
                      <img src={learnerOne} alt="learner1" />
                      <span className=" fw-bold ms-3">Mark Doe</span>
                    </div>
                    <div className="learner1_comment">
                      <div className="learner1_rate">
                        <i className=" fs-6 star fa-solid fa-star"></i>
                        <span className=" ms-1 fs-6 fw-bolder">5</span>
                        <span className=" ms-5 review_date">
                          Reviewed on 22nd March, 2024
                        </span>
                        <div className="learner1_paragraph">
                          <p>
                            I was initially apprehensive, having no prior design
                            experience. But the instructor, John Doe, did an
                            amazing job of breaking down complex concepts into
                            easily digestible modules. The video lectures were
                            engaging, and the real-world examples really helped
                            solidify my understanding.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="learner1">
                    <div className="learner_img_name">
                      <img src={learnerOne} alt="learner1" />
                      <span className=" fw-bold ms-3">Mark Doe</span>
                    </div>
                    <div className="learner1_comment">
                      <div className="learner1_rate">
                        <i className=" fs-6 star fa-solid fa-star"></i>
                        <span className=" ms-1 fs-6 fw-bolder">5</span>
                        <span className=" ms-5 review_date">
                          Reviewed on 22nd March, 2024
                        </span>
                        <div className="learner1_paragraph">
                          <p>
                            I was initially apprehensive, having no prior design
                            experience. But the instructor, John Doe, did an
                            amazing job of breaking down complex concepts into
                            easily digestible modules. The video lectures were
                            engaging, and the real-world examples really helped
                            solidify my understanding.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aside">
          <div className="course_image">
            <img src={asideImage} alt="course2" />
          </div>
          <div className="course_info fs-5 fw-bold mt-4">
            <span className="price">$49</span>
            <strike className=" mx-3">$99.5</strike>
            <span className="discount">50% Off</span>
          </div>
          <button className=" btn_add mt-4 form-control border-0">
            Add to cart
          </button>
          <button className=" btn_buy mt-4 form-control">Buy Now</button>
          <div className="share mt-5">
            <h5>Share</h5>
            <div className="shareLinks mt-4">
              <Link to={"#"}>
                <i class=" text-primary fs-4 me-4 fa-brands fa-facebook"></i>
              </Link>
              <Link to={"#"}>
                <i class=" text-black fs-4 me-4 fa-brands fa-github"></i>
              </Link>
              <Link to={"#"}>
                <i class=" text-danger fs-4 me-4 fa-brands fa-google"></i>
              </Link>
              <Link to={"#"}>
                <i class=" text-black fs-4 me-4 fa-brands fa-x-twitter"></i>
              </Link>
              <Link to={"#"}>
                <i class=" text-success fs-4 me-4 fa-brands fa-microsoft"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
