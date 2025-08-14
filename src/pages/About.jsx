import BlueShadowText from "../components/BlueShadowText";

const About = () => {
    return (
      <div className="flex flex-col items-center px-4 mt-10 text-xl">
        <div className="w-full max-w-3xl text-center">
          <BlueShadowText text="About Me" size="text-3xl font-semibold" />
          <p className="mb-6">
            Passionate cybersecurity enthusiast from Poland, currently pursuing a Master's in Computer Science with an interest in web/android security, reverse engineering, binary exploitation and bug bounty hunting, with a strong focus on web security.
            <br /><br />
            My account on HackerOne bug bounty platform: <a className="text-blue-600 underline" target="_blank" href="https://hackerone.com/deidar3">Link</a>
          </p>
  
          <BlueShadowText text="Contact" size="text-3xl font-semibold" />
          <p>
            📧 Email: <a className="text-blue-600 underline" target="_blank" href='mailto:szymonrydzewski1c2pg@gmail.com'>szymonrydzewski1c2pg@gmail.com</a><br />
            💼 LinkedIn: <a className="text-blue-600 underline" target="_blank" href="https://www.linkedin.com/in/szymon-rydzewski-a44730219/">Szymon Rydzewski</a><br />
            🐦 Twitter: <a className="text-blue-600 underline" target="_blank" href="https://x.com/deidar3_">deidar3</a><br /><br />
          </p>
        </div>
      </div>
    );
  }
  
  export default About;
  
