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
    dividerSrc: "../public/hero-section.jpg", // Added image path
  },
  {
    title: "proof as a foundation",
    headerTag: "h3",
    text: `ikaiva is a studio where we reflect art and beauty striving to make it shine with everything we create.
We are an AI research and product company dedicated to a single truth — that trust in technology begins with proof. Every system we build, every product we ship, is accountable by design. Not as a checkbox. Not as a premium feature. But as the foundation.
The next era of artificial intelligence will be defined not by how fast it can process data, but by how well it can explain itself. At Ikaiva, our mission is to create AI systems that can show their work — systems that bridge performance with verifiable reasoning. It’s AI you can interrogate. AI you can trust. AI that proves itself.
Our flagship product, Lens, puts this philosophy into action — bringing truth and visibility into the heart of software development.`,
    dividerSrc: "../public/divider-2.jpg", // Added image path
  },
  {
    title: "how truth works in ai",
    headerTag: "h4",
    text: `ikaiva is a studio where we reflect art and beauty striving to make it shine with everything we create.
We are an AI research and product company dedicated to a single truth — that trust in technology begins with proof. Every system we build, every product we ship, is accountable by design. Not as a checkbox. Not as a premium feature. But as the foundation.
The next era of artificial intelligence will be defined not by how fast it can process data, but by how well it can explain itself. At Ikaiva, our mission is to create AI systems that can show their work — systems that bridge performance with verifiable reasoning. It’s AI you can interrogate. AI you can trust. AI that proves itself.
Our flagship product, Lens, puts this philosophy into action — bringing truth and visibility into the heart of software development.`,
    dividerSrc: "../public/divider-3.jpg", // Added image path
  },
  {
    title: "live environment navigation system",
    headerTag: "h5",
    text: `ikaiva is a studio where we reflect art and beauty striving to make it shine with everything we create.
We are an AI research and product company dedicated to a single truth — that trust in technology begins with proof. Every system we build, every product we ship, is accountable by design. Not as a checkbox. Not as a premium feature. But as the foundation.
The next era of artificial intelligence will be defined not by how fast it can process data, but by how well it can explain itself. At Ikaiva, our mission is to create AI systems that can show their work — systems that bridge performance with verifiable reasoning.It’s AI you can interrogate. AI you can trust. AI that proves itself.
Our flagship product, Lens, puts this philosophy into action — bringing truth and visibility into the heart of software development.`,
    dividerSrc: "../public/divider-1.jpg", // Added image path
  },
  {
    title: "lens: a product of ikaiva",
    headerTag: "h6",
    text: ``,
    dividerSrc: "../public/divider-2.jpg", // Added image path
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
      <nav className="flex items-center justify-between py-4">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Ikaiva Logo"
          className="h-10 w-auto"
        />

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
  {/* Top 50% - Text */}
  {/* Make this container the positioning context with 'relative' */}
  <div className="flex flex-col justify-center h-1/2  relative">

    {/* The paragraph is now absolutely positioned relative to the parent above */}
    {/* It is placed at the bottom, given full width, but with a max-width for readability */}
    <p className="absolute bottom-0 text-sm sm:text-base lg:text-lg w-full max-w-md lg:w-[30%] leading-5 text-left pb-16 font-[helv-italics] ">
      ikaiva is a studio where we reflect art and beauty striving to make
      it shine with everything we create.
    </p>

    {/* The main heading now takes up the full space in the normal flow */}
    <div className="font-[Helvetica] text-right tracking-[-16px] text-5xl sm:text-6xl lg:text-[16rem] p-0 m-0 pb-8 ">
      <div className='m-0 leading-36  '>reflecting art</div>
      <div>& beauty<span>.</span></div>
    </div>
    
  </div>
</div>

        {/* Bottom 50% - Image */}
        <div className="h-[30rem]">
          <img
            src="../public/hero-section.jpg"
            alt="Landing Visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
    

      <div className="w-[45%] mx-auto flex flex-col space-y-12 sm:space-y-16 mt-12">
  {sections.map((section, idx) => (
    <div key={idx} className="flex flex-col space-y-4">
      <section.headerTag className="text-left font-[helvetica] text-2xl sm:text-3xl lg:text-3xl tracking-[-2px]">
        {section.title}
      </section.headerTag>
      <p className="text-left text-base sm:text-lg leading-relaxed font-[helv-italics]">
        {section.text}
      </p>
      {/* Divider */}
      {idx !== sections.length - 1 && (
        <img
          src={section.dividerSrc}
          alt="Divider"
          className="w-full h-[16px] object-cover"
        />
      )}
    </div>
  ))}
</div>
      {/* Navbar */}
      <nav className="flex items-center justify-between py-4">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Ikaiva Logo"
          className="h-12 w-auto"
        />

        {/* Links */}
        <ul className=" flex space-x-10 text-lg font-medium">
          <li className="cursor-pointer">lens.</li>
          <li className="cursor-pointer">mail.</li>
        </ul>
      </nav>

    </div>
  )
}

export default App