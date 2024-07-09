export default function About() {
  return (
    <section className="py-12 border-b border-gray-200" id="about">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="mb-6">
        {/* Your about text */}
        front-end Engineer who develops modern, reactive, and user-friendly web applications using the latest technologies. rocket Believe a perfect blend of UI architecture is one, where the goals and needs are accounted for in an elegant, efficient, and robust design of the user interface rocket Experience in React.js, Next.js, and state management like Redux.js with proficiency in web technologies like JavaScript, Typescript, Tailwind CSS and SASS. building large-scale web applications, cross-browser platforms, and design constraints on the web, and building responsive user interfaces. rocket
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p><span className="font-bold text-blue-500">Name:</span> Aradom Leake</p>
          <p><span className="font-bold text-blue-500">Birthday:</span> 1 Nov 1996</p>
          {/* More details */}
        </div>
        <div>
          <p><span className="font-bold text-blue-500">Phone:</span> +251 940677928</p>
          <p><span className="font-bold text-blue-500">Email:</span> leakearedom23@gmail.com</p>
          {/* More details */}
        </div>
      </div>
    </section>
  )
}