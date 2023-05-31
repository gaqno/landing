<template>
  <main :class="[!app.darkMode ? 'bg-gradient-to-bl from-[#0F2027] via-[#203A43] to-[#2C5364]' : 'bg-gradient-to-tr from-amber-900 via-violet-900 to-cyan-700', 'min-h-screen overflow-hidden']">
    <header class="z-10 flex justify-between text-sm breadcrumbs mx-4 border-b border-gray-600">
      <button class="ml-2 block md:hidden mr-4" @click.prevent="app.toggleDarkMode">
        <Icon v-if="app.darkMode" name="line-md:moon-to-sunny-outline-loop-transition" size="1.5em" />
        <Icon v-else name="line-md:sunny-filled-loop-to-moon-filled-transition" size="1.5em" />
      </button>
      <ul>
        <li>
          <a href="#home">
            Início
          </a>
        </li>
        <li>
          <a href="#about-me">
            Sobre mim
          </a>
        </li>
        <li>
          <a href="#projects">
            Projetos
          </a>
        </li>
        <li>
          <a href="#experience">
            Experiência
          </a>
        </li>
        <li>
          <a href="#contact">
            Contato
          </a>
        </li>
      </ul>
      <button class="ml-2 hidden md:block" @click.prevent="app.toggleDarkMode">
        <Icon v-if="app.darkMode" name="line-md:moon-to-sunny-outline-loop-transition" size="1.5em" />
        <Icon v-else name="line-md:sunny-filled-loop-to-moon-filled-transition" size="1.5em" />
      </button>
    </header>
    <section class="z-0 relative mt-12" aria-labelledby="join-heading">
      <div class="absolute inset-x-0 hidden h-1/2 lg:block" aria-hidden="true"></div>

      <!-- Landing -->
      <div id="home" data-aos="fade-up" class="mx-auto max-w-7xl lg:bg-transparent lg:px-8">
        <div class="lg:grid lg:grid-cols-12">
          <div class="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
            <div class="absolute inset-x-0 h-1/2 lg:hidden" aria-hidden="true"></div>
            <div class="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:p-0">
              <div class="aspect-h-6 aspect-w-10 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-w-1">
                <img class="rounded-3xl object-cover object-center shadow-2xl" :src="git.avatar_url" alt="">
              </div>
            </div>
          </div>

          <div class="lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
            <div class="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block" aria-hidden="true">
              <svg
                class="absolute bottom-full left-full -translate-x-2/3 translate-y-1/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-blue-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>
              <svg
                class="absolute top-full -translate-x-1/3 -translate-y-1/3 transform xl:-translate-y-1/2 "
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-blue-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>
            </div>
            <div class="relative mx-auto max-w-md space-y-6 px-6 py-12 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
              <h1 class="text-gray-300 text-3xl md:text-5xl">
                E aí, beleza? <br>
                Me chamo <span class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                  Gabriel Aquino
                </span>
              </h1>
              <p class="text-lg text-white">
                Solucionador de problemas, apaixonado por tecnologia e desenvolvimento de software.
              </p>
              <a
                href="https://wa.me/+5511991610328"
                target="_blank"
                class="block w-full rounded-md border border-transparent bg-white px-5 py-3 text-center text-base font-medium text-blue-700 shadow-md hover:bg-slate-50 sm:inline-block sm:w-auto"
              >
                Entre em contato
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- About Me -->
      <div id="about-me" data-aos="fade-up" class="relative isolate z-10 mt-32 sm:mt-48">
        <div class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
          <svg class="h-[40rem] w-[80rem] flex-none stroke-gray-100/30" aria-hidden="true">
            <defs>
              <pattern
                id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                width="200"
                height="200"
                x="50%"
                y="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(-100 0)"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>

            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
            />
          </svg>
        </div>
        <div class="mx-auto max-w-7xl px-6 lg:px-8 pt-8">
          <h2 data-aos="fade-right" class="text-left text-2xl font-semibold leading-8 text-green-500">
            # Sobre mim
          </h2>
          <div class="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none ">
            <p data-aos="fade-up">
              👨‍💻 Sou um desenvolvedor de nível intermediário com 2 anos de experiência em desenvolvimento de aplicativos. Minha especialização está em desenvolvimento frontend, principalmente com o Vue em conjunto com Nuxt 3, Vuex e Pinia. Além disso, tenho habilidades em várias outras tecnologias, incluindo React, React Native, Redux, Context API, SQL, Prisma, Node e NestJS no back-end.
            </p>
            <p data-aos="fade-up">
              📚 Estou sempre procurando novos desafios e oportunidades para expandir meu conhecimento e habilidades como desenvolvedor, e mantenho-me atualizado com as últimas tendências, tecnologias e melhores práticas da indústria.
            </p>

            <p data-aos="fade-up">
              🤝 Gosto de colaborar com equipes e indivíduos para criar soluções inovadoras que resolvam problemas de negócios complexos. Minha experiência anterior na Newcore me permitiu desenvolver habilidades em várias tecnologias, incluindo React, React Native, TypeScript, Node, Angular, NestJS, Docker, DataDog e Google Cloud.
            </p>
            <p data-aos="fade-up">
              💻 Meu compromisso é produzir soluções eficientes e escaláveis para atender às necessidades de meus clientes. Tenho habilidades em Tailwind CSS para garantir interfaces de usuário atraentes e funcionais. Já entreguei projetos para clientes em várias indústrias, como imobiliária, telecomunicações e marketing.
            </p>
            <p data-aos="fade-up">
              🏨 Além da minha experiência em tecnologia, tenho um histórico em atendimento ao cliente no ramo da hotelaria. Esta experiência me permitiu desenvolver habilidades de comunicação e empatia que são altamente valiosas na interação com usuários finais de sistemas de software.
            </p>

            <p data-aos="fade-up">
              🌟 Também sou interessado em ciências sociais como sociologia, história e filosofia. Esses assuntos me permitem explorar e entender as complexidades do comportamento humano e do mundo em que vivemos.
            </p>
          </div>
        </div>
      </div>

      <!-- Projects -->
      <div data-aos="fade-up" class="mx-auto max-w-7xl lg:bg-transparent lg:px-8">
        <div class="lg:grid lg:grid-cols-12">
          <div class="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
            <div class="absolute inset-x-0 h-1/2 lg:hidden" aria-hidden="true"></div>
          </div>

          <div class="py-24"></div>

          <div id="projects" class="lg:col-span-10 lg:col-start-1 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
            <div class="relative max-w-md space-y-6 px-6 py-12 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-1 lg:max-w-none lg:p-0">
              <h2 data-aos="fade-right" class="text-left text-2xl font-semibold leading-8 text-green-500">
                # Projetos
              </h2>
            </div>
          </div>
        </div>
        <div>
          <span v-for="project, ind in projects" :key="project.name">
            <div :data-aos="ind % 2 == 1 ? 'fade-left' : 'fade-right'" class="mx-auto max-w-7xl lg:bg-transparent lg:px-8">
              <div class="lg:grid lg:grid-cols-12">
                <div class="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
                  <div class="absolute inset-x-0 h-1/2 lg:hidden" aria-hidden="true"></div>
                  <div class="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:p-0">
                    <div class="aspect-h-6 aspect-w-10 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-w-1">
                      <img class="rounded-3xl object-cover object-center shadow-2xl" :src="project.banner" alt="">
                    </div>
                  </div>
                </div>

                <div class="lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
                  <div class="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block" aria-hidden="true">
                    <svg
                      class="absolute bottom-full left-full -translate-x-2/3 translate-y-1/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
                      width="404"
                      height="384"
                      fill="none"
                      viewBox="0 0 404 384"
                      aria-hidden="true"
                    >
                      <defs>
                        <pattern
                          id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            x="0"
                            y="0"
                            width="4"
                            height="4"
                            class="text-blue-500"
                            fill="currentColor"
                          />
                        </pattern>
                      </defs>
                      <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                    </svg>
                    <svg
                      class="absolute top-full -translate-x-1/3 -translate-y-1/3 transform xl:-translate-y-1/2"
                      width="404"
                      height="384"
                      fill="none"
                      viewBox="0 0 404 384"
                      aria-hidden="true"
                    >
                      <defs>
                        <pattern
                          id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            x="0"
                            y="0"
                            width="4"
                            height="4"
                            class="text-blue-500"
                            fill="currentColor"
                          />
                        </pattern>
                      </defs>
                      <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                    </svg>
                  </div>
                  <div class="relative mx-auto max-w-md space-y-6 px-6 py-12 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                    <h1 class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-3xl md:text-5xl font-black">
                      {{ project.name }}
                    </h1>
                    <p class="text-lg text-white pb-8">
                      {{ project.description }}
                    </p>
                    <p class="text-gray-400 text-sm pb-2">
                      Tecnologias utilizadas:
                    </p>
                    <div class="inline-flex gap-2 flex-wrap">
                      <span v-for="tech, _ind in project.tecnologies" :key="`${_ind}-${tech}`" class="">
                        <a v-for="item in formatTechs(tech)" :key="item.icon" :class="[item.color, 'w-fit']">
                          <Icon :name="item.icon" />
                          {{ item.name }}
                        </a>
                      </span>
                    </div>
                    <div>
                      <a class="block w-full rounded-md border border-transparent bg-white p-1 text-center text-base font-medium text-orange-500 shadow-md hover:bg-slate-50 sm:inline-block sm:w-auto" :href="project.link" target="_blank">
                        <span v-if="project.link.includes('github')">
                          <Icon name="mdi:github" size="1.5em" />
                          <span class="text-xs text-gray-400 ml-3">
                            Ver no Github
                          </span>
                        </span>
                        <span v-else>
                          <Icon name="mdi:link" size="1.5em" />
                          <span class="text-xs text-gray-400 ml-3">
                            Visitar
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>

      <!-- Logo cloud -->
      <div id="experience" data-aos="fade-up" class="relative isolate  mt-32 sm:mt-48">
        <div class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
          <svg class="h-[40rem] w-[80rem] flex-none stroke-gray-100/30" aria-hidden="true">
            <defs>
              <pattern
                id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                width="200"
                height="200"
                x="50%"
                y="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(-100 0)"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>

            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
            />
          </svg>
        </div>
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 class="text-center text-lg font-semibold leading-8 text-white">
            Confiado por grandes startups e empresas de tecnologia
          </h2>
          <div class="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none ">
            <a href="https://www.ffid.com.br" target="_blank">
              <img
                class="col-span-2 w-full h-[10vh] object-contain lg:col-span-1"
                src="https://app.ffid.com.br/static/img/FFID_new_logo.a365eee.png"
                alt="Transistor"
              >
            </a>
            <a href="https://www.newcore.com.br" target="_blank">
              <img
                class="col-span-2 w-full h-[30vh] object-contain lg:col-span-1"
                src="@/static/newcore.png"
                alt="Reform"
              >
            </a>
          </div>
        </div>
      </div>

      <div class="my-32">
        <div id="contact" data-aos="fade-right" class="lg:col-span-10 lg:col-start-1 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
          <div class="relative max-w-md space-y-6 px-6 py-12 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-1 lg:max-w-none lg:p-0">
            <h2 class="text-left text-2xl font-semibold leading-8 text-green-500">
              # Contato
            </h2>
            <span>
              Entre em contato comigo através dos meios
              <div>
                <a class="block hover:text-indigo-300" href="mailto:gabriel.aquino@outlook.com">
                  <Icon name="line-md:email" class="mr-2" />
                  gabriel.aquino@outlook.com
                </a>
                <a class="block hover:text-indigo-300" href="https://wa.me/5511991610328" target="_blank">
                  <Icon name="mdi:whatsapp" class="mr-2" />
                  +55 (11) 99161-0328
                </a>
                <a class="block hover:text-indigo-300" href="https://linkedin.com/in/gaqno" target="_blank">
                  <Icon name="line-md:linkedin" class="mr-2" />
                  LinkedIn
                </a>
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import AOS from "aos";
import { useAppStore } from "~/store/app";
import { User } from "~/types/git";
import MooGIF from "@/static/moo.gif";
import MarvelIMG from "@/static/marvel-mockup.gif";
import FuriousGIF from "@/static/furious-fish.gif";
import "aos/dist/aos.css";

const app = useAppStore();
const git = ref({} as User);

const projects = ref([
  {
    banner: MooGIF,
    created_at: "",
    description: "Inspirado em Daki e iFood, o Moo Vegan é um aplicativo de delivery de comida vegana.",
    link: "https://github.com/gaqno/moovegan_frontend/",
    name: "Moo Vegan",
    tecnologies: ["React", "React Native", "TailwindCSS", "JavaScript", "TypeScript"],
  },
  {
    banner: MarvelIMG,
    created_at: "",
    description: "CRUD de heróis da Marvel, contendo dados de personagens, quadrinhos, séries e eventos.",
    link: "https://marvel-nuxt3.vercel.app/",
    name: "Marvel Heroes",
    tecnologies: ["Vue", "Nuxt", "TailwindCSS", "JavaScript", "TypeScript"],
  },
  {
    banner: FuriousGIF,
    created_at: "",
    description: "Eccomerce da marca PESCA FURIOSA, com sistema de pagamento e carrinho de compras.",
    link: "https://furious-fish.vercel.app/",
    name: "Pesca Furiosa",
    tecnologies: ["Vue", "Nuxt", "TailwindCSS", "JavaScript", "TypeScript"],
  },
]);
const fetchGit = () => {
  return new Promise((resolve, reject) => {
    fetch("https://api.github.com/users/gaqno", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

const formatTechs = (value: any) => {
  const techs = [];
  if (value === "React") {
    const name = "React";
    const color = "bg-blue-500 text-white rounded px-2 py-1";
    const icon = "logos:preact";
    techs.push({ color, icon, name });
  }
  if (value === "Vue") {
    const name = "Vue";
    const color = "bg-green-500 text-white rounded px-2 py-1";
    const icon = "logos:vue";
    techs.push({ color, icon, name });
  }
  if (value === "Nuxt") {
    const name = "Nuxt";
    const color = "bg-green-500 text-white rounded px-2 py-1";
    const icon = "logos:nuxt-icon";
    techs.push({ color, icon, name });
  }
  if (value === "TailwindCSS") {
    const name = "TailwindCSS";
    const color = "bg-blue-500 text-white rounded px-2 py-1";
    const icon = "logos:tailwindcss-icon";
    techs.push({ color, icon, name });
  }
  if (value === "JavaScript") {
    const name = "JavaScript";
    const color = "bg-yellow-500 text-white rounded px-2 py-1";
    const icon = "logos:javascript";
    techs.push({ color, icon, name });
  }
  if (value === "TypeScript") {
    const name = "TypeScript";
    const color = "bg-blue-500 text-white rounded px-2 py-1";
    const icon = "logos:typescript-icon";
    techs.push({ color, icon, name });
  }
  if (value === "NodeJS") {
    const name = "NodeJS";
    const color = "bg-green-500 text-white rounded px-2 py-1";
    const icon = "logos:nodejs-icon";
    techs.push({ color, icon, name });
  }
  return techs;
};

onMounted(() => {
  AOS.init({
    duration: 1200,
  });
  fetchGit()
    .then((data) => {
      git.value = {
        ...git.value,
        ...data as User,
      };
    })
    .catch(err => console.log(err));
});
</script>
