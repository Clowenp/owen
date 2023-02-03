import React from "react";

const Courses = () => {

    return(
        <div>
            <h1>Courses</h1>
            <ul>
                <li> <h2>Term 1A</h2>
                    <ul>
                        <li>
                            <h3>Math 135</h3>

                        </li>
                        <li>
                            <h3>CS 135</h3>
                        </li>
                        <li>
                            <h3>Math 147</h3>
                        </li>
                    </ul>
                </li>
                <li>
                    <h2>Term 1B</h2>
                    <ul>
                        <li>
                            <h3>Math 136</h3>
                        </li>
                        <li>
                            <h3>CS 136</h3>
                        </li>
                        <li>
                            <h3>Math 148</h3>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Courses;