import React, { useEffect, useState } from 'react';
import './Skills.css';
import { FiServer, FiLayout, FiDatabase, FiSettings } from 'react-icons/fi';

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('skills');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    const skillCategories = [
        {
            id: 'languages',
            title: 'Languages',
            skills: ['Java', 'Kotlin', 'Python', 'JavaScript', 'C']
        },
        {
            id: 'backend',
            title: 'Backend Development',
            skills: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'JDBC', 'Spring Security', 'REST APIs']
        },
        {
            id: 'microservices',
            title: 'Microservices',
            skills: ['Microservices Architecture', 'OpenFeign', 'Eureka', 'Swagger']
        },
        {
            id: 'databases',
            title: 'Databases',
            skills: ['MySQL', 'PostgreSQL', 'MongoDB']
        },
        {
            id: 'cloud',
            title: 'Cloud & DevOps',
            skills: ['AWS', 'Docker']
        },
        {
            id: 'tools',
            title: 'Tools & Web',
            skills: ['Git', 'GitHub', 'Postman', 'Maven', 'HTML', 'CSS', 'JavaScript']
        }
    ];

    return (
        <section id="skills" className="bg-alt skills-section">
            <div className="section-container">
                <h2 className="section-title">Skills</h2>

                {/* Core Stack Highlight */}
                <div className={`core-stack-highlight ${isVisible ? 'fade-in-up' : ''}`}>
                    <h3 className="core-stack-title">Core Stack</h3>
                    <div className="core-stack-divider"></div>
                    <div className="core-stack-items">
                        <span className="core-item">Java</span>
                        <span className="core-separator">|</span>
                        <span className="core-item">Spring Boot</span>
                        <span className="core-separator">|</span>
                        <span className="core-item">MySQL</span>
                    </div>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.id}
                            className={`skill-card ${isVisible ? 'fade-in-up' : ''}`}
                            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                        >
                            <h3 className="skill-category-title">{category.title}</h3>
                            <div className="skill-tags">
                                {category.skills.map(skill => (
                                    <span key={skill} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Current Focus Section */}
                <div className={`current-focus-wrapper ${isVisible ? 'fade-in-up' : ''}`}>
                    <div className="code-block-wrapper slide-up-animation">
                        <div className="code-block-header">
                            <span className="file-name">currentFocus.java</span>
                            <span className="file-icon">☕</span>
                        </div>
                        <pre className="java-class-code">
                            <code>
                                <span className="keyword">public class</span> <span className="class-name">CurrentFocus</span> {'{\n'}
                                {'\n'}
                                <span className="code-tab"></span><span className="keyword">String</span> <span className="variable">learning</span>  = <span className="string">"Microservices architecture using Spring Cloud and Docker"</span>;{'\n'}
                                <span className="code-tab"></span><span className="keyword">String</span> <span className="variable">building</span>  = <span className="string">"SpringMart E-commerce backend evolving into a microservices architecture"</span>;{'\n'}
                                <span className="code-tab"></span><span className="keyword">String</span> <span className="variable">exploring</span> = <span className="string">"AWS deployment strategies for Spring Boot applications"</span>;{'\n'}
                                {'}'}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
