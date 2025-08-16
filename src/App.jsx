import React from 'react'

const App = () => {

  const sections = [
  {
    title: "mirroing the beauty in ai",
    headerTag: "h2",
    text: `ikaiva is a studio where we reflect art and beauty striving to make it shine with everything we create.
We are an AI research and product company dedicated to a single truth — that trust in technology begins with proof. Every system we build, every product we ship, is accountable by design. Not as a checkbox. Not as a premium feature. But as the foundation.
The next era of artificial intelligence will be defined not by how fast it can process data, but by how well it can explain itself. At Ikaiva, our mission is to create AI systems that can show their work — systems that bridge performance with verifiable reasoning.It’s AI you can interrogate. AI you can trust. AI that proves itself.
Our flagship product, Lens, puts this philosophy into action — bringing truth and visibility into the heart of software development.`,
    dividerSrc: "../hero-section.jpg", // Added image path
  },
  {
    title: "proof as a foundation",
    headerTag: "h3",
    text: `ikaiva is a studio where we reflect art and beauty striving to make it shine with everything we create.
We are an AI research and product company dedicated to a single truth — that trust in technology begins with proof. Every system we build, every product we ship, is accountable by design. Not as a checkbox. Not as a premium feature. But as the foundation.
The next era of artificial intelligence will be defined not by how fast it can process data, but by how well it can explain itself. At Ikaiva, our mission is to create AI systems that can show their work — systems that bridge performance with verifiable reasoning. It’s AI you can interrogate. AI you can trust. AI that proves itself.
Our flagship product, Lens, puts this philosophy into action — bringing truth and visibility into the heart of software development.`,
    dividerSrc: "../divider-2.jpg", // Added image path
  },
  {
    title: "how truth works in ai",
    headerTag: "h4",
    text: `ikaiva is a studio where we reflect art and beauty striving to make it shine with everything we create.
We are an AI research and product company dedicated to a single truth — that trust in technology begins with proof. Every system we build, every product we ship, is accountable by design. Not as a checkbox. Not as a premium feature. But as the foundation.
The next era of artificial intelligence will be defined not by how fast it can process data, but by how well it can explain itself. At Ikaiva, our mission is to create AI systems that can show their work — systems that bridge performance with verifiable reasoning. It’s AI you can interrogate. AI you can trust. AI that proves itself.
Our flagship product, Lens, puts this philosophy into action — bringing truth and visibility into the heart of software development.`,
    dividerSrc: "../divider-3.jpg", // Added image path
  },
  {
    title: "live environment navigation system",
    headerTag: "h5",
    text: `ikaiva is a studio where we reflect art and beauty striving to make it shine with everything we create.
We are an AI research and product company dedicated to a single truth — that trust in technology begins with proof. Every system we build, every product we ship, is accountable by design. Not as a checkbox. Not as a premium feature. But as the foundation.
The next era of artificial intelligence will be defined not by how fast it can process data, but by how well it can explain itself. At Ikaiva, our mission is to create AI systems that can show their work — systems that bridge performance with verifiable reasoning.It’s AI you can interrogate. AI you can trust. AI that proves itself.
Our flagship product, Lens, puts this philosophy into action — bringing truth and visibility into the heart of software development.`,
    dividerSrc: "../divider-1.jpg", // Added image path
  },
  {
    title: "lens: a product of ikaiva",
    headerTag: "h6",
    text: ``,
    dividerSrc: "../divider-2.jpg", // Added image path
  },
  {
    title: "ikaiva's studio",
    headerTag: "h6",
    text: `ikaiva is a studio where we reflect art and beauty striving to make it shine with everything we create.
We are an AI research and product company dedicated to a single truth — that trust in technology begins with proof. Every system we build, every product we ship, is accountable by design. Not as a checkbox. Not as a premium feature. But as the foundation.
The next era of artificial intelligence will be defined not by how fast it can process data, but by how well it can explain itself. At Ikaiva, our mission is to create AI systems that can show their work — systems that bridge performance with verifiable reasoning.It’s AI you can interrogate. AI you can trust. AI that proves itself.
Our flagship product, Lens, puts this philosophy into action — bringing truth and visibility into the heart of software development.`,
  },
];

  return (
    <div>
      <div className="w-[90%] mx-auto min-h-screen flex flex-col">
  {/* Navbar */}
  <nav className="flex items-center justify-between py-5">
    {/* Logo */}
    <img src="/logo.png" alt="Ikaiva Logo" className=" h-7 sm:h-9 w-auto" />
    {/* Links */}
    <ul className="flex space-x-10 text-lg font-[helv-italics]">
      <li className="cursor-pointer">lens.</li>
      <li className="cursor-pointer">mail.</li>
    </ul>
  </nav>

  {/* Main Content */}
  <div className="flex flex-col flex-grow">
    {/* Top 50% - Text */}
    <div className="flex flex-col flex-grow">
      <div className="flex flex-col justify-end h-1/2">
        {/* Main heading for mobile/tablet */}
        <div className="font-[Helvetica] text-right tracking-[-5px] text-[7rem] sm:text-6xl md:hidden block">
          <div className="m-0 leading-20">reflecting</div>
          <div className="m-0 leading-34">art &</div>
          <div className="m-0 leading-14 mb-12">beauty<span>.</span></div>
        </div>

        {/* Main heading for desktop */}
        <div className="font-[Helvetica] text-right tracking-[-16px] text-5xl sm:text-6xl lg:text-[16rem] p-0 m-0 pb-8 pt-3 hidden md:block">
          <div className="m-0 leading-36">reflecting art</div>
          <div>& beauty<span>.</span></div>
        </div>

        {/* The paragraph is now in the normal document flow and comes after the headings. */}
        <p className="text-md sm:text-base lg:text-lg w-full max-w-md lg:w-[30%] leading-5 text-left pb-4 sm:pb-4 lg:pb-16 font-[helv-italics]">
          ikaiva is a studio where we reflect art and beauty striving to make it shine with everything we create.
        </p>
      </div>
    </div>

    {/* Bottom 50% - Image */}
    <div className="h-[24rem] sm:h-[30rem]">
      <img
        src="../hero-section.jpg"
        alt="Landing Visual"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
    

      <div className="w-[90%] mx-auto flex flex-col mb-12 mt-0 md:mt-24 md:mb-24">
  {/* Main Content Sections */}
  <div className="w-full md:w-[45%] mx-auto flex flex-col space-y-12 sm:space-y-16 mt-12">
    {sections.map((section, idx) => (
      <div key={idx} className="flex flex-col space-y-4">
        <section.headerTag className="text-left font-[helvetica] text-xl sm:text-2xl lg:text-3xl tracking-[-1px] sm:tracking-[-2px]">
          {section.title}
        </section.headerTag>
        <p className="text-left text-sm sm:text-base leading-relaxed font-[helv-italics]">
          {section.text}
        </p>
        {/* Divider */}
        {idx !== sections.length - 1 && (
          <img
            src={section.dividerSrc}
            alt="Divider"
            className="w-full h-[12px] sm:h-[16px] object-cover"
          />
        )}
      </div>
    ))}
  </div>
  
  {/* Footer Navbar */}
  <nav className="flex items-center justify-between py-4">
    {/* Logo */}
    <img src="/logo.png" alt="Ikaiva Logo" className="h-7 sm:h-9 w-auto" />
    {/* Links */}
    <ul className="flex space-x-4 sm:space-x-8 md:space-x-10 text-base md:text-lg font-[helv-italics]">
      <li className="cursor-pointer">lens.</li>
      <li className="cursor-pointer">mail.</li>
    </ul>
  </nav>
</div>
      

    </div>
  )
}

export default App