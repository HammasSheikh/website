export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '30px', color: 'blue' }}>
        My Portfolio
      </h1>

      <p style={{ fontSize: '20px', color: 'black', marginLeft: '10px' }}>
        Hi, I am Hammas Sheikh, 19 years old. I am a Hafiz-e-Quran and ICOM passed.
      </p>
      <p style={{ fontSize: '20px', color: 'black', marginLeft: '10px' }}>
        I am currently doing an AI and Web Development course at Governor House Sindh, Karachi.
      </p>

      <h2 style={{ marginLeft: '10px', marginTop: '20px', fontSize: '25px', color: 'green' }}>
        My Projects
      </h2>
      <ul style={{ marginLeft: '30px', fontSize: '18px', color: 'black' }}>
        <li>Simple Calculator</li>
        <li>Quiz App</li>
        <li>ATM Machine</li>
        <li>Result Calculator</li>
      </ul>

<h2 style={{ marginLeft: '10px', marginTop: '20px', fontSize: '25px', color: 'green' }}>
My To-Do List
</h2>
<ul style={{ marginLeft: '30px', fontSize: '18px', color: 'black' }}>
<li>Build an E-commerce website</li>
<li>Learn React.js</li>
<li>Create a weather forecasting app</li>
<li>Develop a personal blog</li>
<li>Start learning Node.js for backend</li>
</ul>

<h2 style={{ marginLeft: '10px', marginTop: '20px', fontSize: '25px', color: 'green' }}>
Languages I Know
</h2>
<ul style={{ marginLeft: '30px', fontSize: '18px', color: 'black' }}>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
<li>TypeScript</li>
<li>Tailwind CSS</li>
</ul>

<h2 style={{ marginLeft: '10px', marginTop: '20px', fontSize: '25px', color: 'green' }}>
My Course Progress
</h2>
<p style={{ fontSize: '18px', color: 'black', marginLeft: '10px' }}>
I have completed the first quarter of my AI and Web Development course. 
Currently, I am learning the fundamentals of full-stack development, with a focus on building projects using HTML, CSS, JavaScript, and Tailwind CSS.
I am excited to start working on more advanced concepts such as React.js and Node.js in the upcoming quarters.
</p>

      <footer style={{ marginTop: '50px', fontSize: '18px', color: 'gray', textAlign: 'center' }}>
        <p>© 2024 Hammas Sheikh. Learning Next.js and Tailwind CSS.</p>
      </footer>
    </div>
  );
}