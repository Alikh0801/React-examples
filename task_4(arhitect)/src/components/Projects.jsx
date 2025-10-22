function Projects() {
    const projectList = [
        { id: 1, title: "Summer", image: "https://www.w3schools.com/w3images/house5.jpg" },
        { id: 2, title: "Brick House", image: "https://www.w3schools.com/w3images/house2.jpg" },
        { id: 3, title: "Renovated", image: "https://www.w3schools.com/w3images/house3.jpg" },
        { id: 4, title: "Barn House", image: "https://www.w3schools.com/w3images/house4.jpg" },
        { id: 5, title: "Summer", image: "https://www.w3schools.com/w3images/house2.jpg" },
        { id: 6, title: "Brick House", image: "https://www.w3schools.com/w3images/house5.jpg" },
        { id: 7, title: "Renovated", image: "https://www.w3schools.com/w3images/house4.jpg" },
        { id: 8, title: "Barn House", image: "https://www.w3schools.com/w3images/house3.jpg" },
    ];

    return (
        <>
            <div id="projects" className="w3-container w3-padding-32">
                <h2 className="w3-border-bottom w3-border-light-grey w3-padding-16">
                    Projects
                </h2>
            </div>

            <div className="w3-row-padding">
                {projectList.map((project) => (
                    <div className="w3-col l3 m6 w3-margin-bottom" key={project.id}>
                        <div className="w3-display-container">
                            <div className="w3-display-topleft w3-black w3-padding">
                                {project.title}
                            </div>
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{ width: "100%" }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Projects;
