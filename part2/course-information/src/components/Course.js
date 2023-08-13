const Header = ({ course }) => <h2>{course}</h2>

const Content = ({ parts }) => (
  <>
    {parts.map((part) => 
      <Part
        key={part.id}
        name={part.name}
        exercises={part.exercises}
      />
    )}
  </>
)

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
)

const Total = ({ parts }) => (
  <h3>
    total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises
  </h3>
)

const Course = ({ course }) => (
  <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>
)

export default Course
