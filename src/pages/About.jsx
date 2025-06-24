const About = () => {
    return (
      <div className="flex flex-col items-center px-4 mt-10 text-xl font-semibold">
            <div className="w-full max-w-3xl text-center">
          <h1 className="text-3xl [text-shadow:_7px_5px_7px_#85d0ff] text-sky-400 mb-5 mt-10">About Me</h1>
          <p className="mb-6">
            Passionate cybersecurity enthusiast from Poland, currently pursuing a Bachelor’s in Computer Science (3rd Year) with an interest in web/android security, reverse engineering, binary exploitation and bug bounty hunting, with a strong focus on web security.
            <br /><br />
            My account on HackerOne bug bounty platform: <a className="text-blue-600 underline" href="https://hackerone.com/deidar3">Link</a>
          </p>
  
          <h1 className="text-3xl [text-shadow:_7px_5px_7px_#85d0ff] text-sky-400 mb-5 mt-10">Contact</h1>
          <p>
            📧 Email: <a className="text-blue-600 underline" href='mailto:szymonrydzewski1c2pg@gmail.com'>szymonrydzewski1c2pg@gmail.com</a><br />
            💼 LinkedIn: <a className="text-blue-600 underline" href="https://www.linkedin.com/in/szymon-rydzewski-a44730219/">Szymon Rydzewski</a><br />
            🐦 Twitter: <a className="text-blue-600 underline" href="https://x.com/Szymon46022913">deidar3</a><br /><br />
          </p>
        </div>
      </div>
    );
  }
  
  export default About;
  