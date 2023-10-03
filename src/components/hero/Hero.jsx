import "./Hero.scss";

const Hero = () => {
  return (
    <div class="site-hero">
      <div className="contain-hero">
        <h1 class="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
          Create beautiful website with fabulous components. <span>CSS</span>
        </h1>

        <p class="mt-6 text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          similique obcaecati illum mollitia.
        </p>
      </div>
    </div>
  );
};

export default Hero;
