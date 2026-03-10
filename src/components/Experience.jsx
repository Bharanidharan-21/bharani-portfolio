import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="section-container">
                <h2 className="section-title">Experience</h2>
                <div className="experience-timeline">
                    <div className="experience-item card fade-in-up">
                        <div className="experience-header">
                            <h3 className="company-name">Wipro, Chennai</h3>
                            <span className="experience-date">May 2025 – June 2025</span>
                        </div>

                        <div className="internship-badge">Internship</div>
                        <h4 className="job-role">Java Developer Intern</h4>

                        <ul className="experience-description-list">
                            <li>Developed a console-based E-Shop application using Java, JDBC, and MySQL, implementing CRUD operations and database connectivity.</li>
                            <li>Built backend components using Spring Boot, Spring MVC, Hibernate, and Spring Data JPA, following layered architecture principles for modular design.</li>
                            <li>Implemented and tested RESTful APIs and explored microservices fundamentals using Spring Web, Eureka, OpenFeign, and Swagger.</li>
                            <li>Contributed to Product and Coupon service modules, improving backend structure and maintainability.</li>
                        </ul>

                        <div className="experience-tech-stack">
                            <span className="tech-label">Tech Stack:</span>
                            <div className="tech-tags">
                                <span className="tech-tag">Java</span>
                                <span className="tech-tag">Spring Boot</span>
                                <span className="tech-tag">Hibernate</span>
                                <span className="tech-tag">JPA</span>
                                <span className="tech-tag">MySQL</span>
                                <span className="tech-tag">Microservices</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
