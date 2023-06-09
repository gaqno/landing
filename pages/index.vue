<template>
  <main :class="[!app.darkMode ? 'bg-gradient-to-bl from-[#0F2027] via-[#203A43] to-[#2C5364]' : 'bg-gradient-to-tr from-amber-900 via-violet-900 to-cyan-700', 'min-h-screen overflow-hidden']">
    <div
      id="about-me"
      class="absolute bg-green-500/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden blur-3xl"
      :style="{
        opacity,
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
      }"
    />
    <header class="z-10 flex justify-between text-sm breadcrumbs mx-4 border-b border-gray-600">
      <button class="ml-2 block md:hidden mr-4" @click.prevent="app.toggleDarkMode">
        <Icon v-if="app.darkMode" name="line-md:moon-to-sunny-outline-loop-transition" size="1.5em" />
        <Icon v-else name="line-md:sunny-filled-loop-to-moon-filled-transition" size="1.5em" />
      </button>
      <label class="swap swap-rotate">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" class="hidden">
        <Icon
          v-if="locale === 'pt'"
          name="game-icons:brazil-flag"
          size="1.5em"
          @click="setLocale('cn')"
        />
        <Icon
          v-if="locale === 'cn'"
          name="emojione-monotone:flag-for-china"
          size="1.5em"
          @click="setLocale('en')"
        />
        <Icon
          v-if="locale === 'en'"
          name="icon-park-outline:english"
          size="1.5em"
          @click="setLocale('pt')"
        />
      </label>
      <button class="ml-2 block md:hidden mr-4" @click.prevent="app.toggleDarkMode" />
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
      <div class="absolute inset-x-0 hidden h-1/2 lg:block" aria-hidden="true" />

      <!-- Landing -->
      <div
        id="home"
        data-aos="fade-up"
        class="mx-auto max-w-7xl lg:bg-transparent lg:px-8"
      >
        <div class="lg:grid lg:grid-cols-12">
          <div class="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
            <div class="absolute inset-x-0 h-1/2 lg:hidden" aria-hidden="true" />
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
                {{ $t('whatsupp') }} <br>
                {{ $t('my_name') }} <br><span class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                  Gabriel Aquino
                </span>
              </h1>
              <p class="text-lg text-white">
                {{ $t('description') }}
              </p>
              <a
                href="https://wa.me/+5511991610328"
                target="_blank"
                class="block w-full rounded-md border border-transparent bg-white px-5 py-3 text-center text-base font-medium text-blue-700 shadow-md hover:bg-slate-300 sm:inline-block sm:w-auto"
              >
                {{ $t('contact_me') }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- About Me -->

      <div
        data-aos="fade-up"
        class="relative isolate z-10 mt-32 sm:mt-48"
      >
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
              {{ $t('p_one') }}
            </p>
            <p data-aos="fade-up">
              {{ $t('p_two') }}
            </p>

            <p data-aos="fade-up">
              {{ $t('p_three') }}
            </p>
            <p data-aos="fade-up">
              {{ $t('p_four') }}
            </p>
            <p data-aos="fade-up">
              {{ $t('p_five') }}
            </p>
            <p data-aos="fade-up">
              {{ $t('p_six') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Projects -->
      <div data-aos="fade-up" class="mx-auto max-w-7xl lg:bg-transparent lg:px-8">
        <div class="lg:grid lg:grid-cols-12">
          <div class="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
            <div class="absolute inset-x-0 h-1/2 lg:hidden" aria-hidden="true" />
          </div>

          <div class="py-24" />

          <div id="projects" class="lg:col-span-10 lg:col-start-1 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
            <div class="relative max-w-md space-y-6 px-6 py-12 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-1 lg:max-w-none lg:p-0">
              <h2 data-aos="fade-right" class="text-left text-2xl font-semibold leading-8 text-green-500">
                # {{ $t('projects') }}
              </h2>
            </div>
          </div>
        </div>
        <div>
          <span v-for="project, ind in projects" :key="project.name">
            <div :data-aos="ind % 2 == 1 ? 'fade-left' : 'fade-right'" class="mx-auto max-w-7xl lg:bg-transparent lg:px-8">
              <div class="lg:grid lg:grid-cols-12">
                <div class="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
                  <div class="absolute inset-x-0 h-1/2 lg:hidden" aria-hidden="true" />
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
                      <span v-if="project.name === 'Moo Vegan'">
                        {{ $t('moo_description') }}
                      </span>
                      <span v-if="project.name === 'Marvel Heroes'">
                        {{ $t('marvel_description') }}
                      </span>
                      <span v-if="project.name === 'Pesca Furiosa'">
                        {{ $t('fish_description') }}
                      </span>
                    </p>
                    <p class="text-gray-400 text-sm pb-2">
                      {{ $t('tech_stack') }}
                    </p>
                    <div class="inline-flex gap-2 flex-wrap">
                      <span v-for="tech, _ind in project.tecnologies" :key="`${_ind}-${tech}`" class="">
                        <i v-for="item in formatTechs(tech)" :key="item.icon" :class="[item.color, 'w-fit text-xs' ]">
                          <Icon :name="item.icon" />
                          {{ item.name }}
                        </i>
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
            {{ $t('trusted_by') }}
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

      <div data-aos="fade-down" class="p-20 rounded-full">
        <h1 data-aos="fade-left" class="text-center mb-8 text-lg font-semibold leading-8 text-white">
          {{ $t('about') }}
        </h1>
        <iframe
          src="https://drive.google.com/file/d/1GDTCfr21r7k7aFgFhPQPErD7Bm0JjRD2/preview"
          class="w-full h-[50vh] rounded"
          allow="autoplay"
        />
      </div>

      <div class="my-32">
        <div id="contact" data-aos="fade-right" class="lg:col-span-10 lg:col-start-1 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
          <div class="relative max-w-md space-y-6 px-6 py-12 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-2 lg:max-w-none lg:p-0">
            <h2 class="text-left text-2xl font-semibold leading-8 text-green-500 ">
              # {{ $t('contact') }}
            </h2>
            <span>
              {{ $t('contact_description') }}
              <div class="mt-4">
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
const { locale, setLocale } = useI18n();
const { x, y } = useMouse();
const { width, height } = useWindowSize();
// const logoGrandient = computed(
//   () => `radial-gradient(circle at ${x.value}px ${y.value}px, black 30%, transparent 100%)`,
// );
const dx = computed(() => Math.abs(x.value - width.value / 2));
const dy = computed(() => Math.abs(y.value - height.value / 2));
const distance = computed(() => Math.sqrt(dx.value * dx.value + dy.value * dy.value));
const size = computed(() => Math.min(300 - distance.value / 3, 150));
const opacity = computed(() => Math.min(Math.max(size.value / 100, 0.7), 1));
const projects = ref([
  {
    banner: MooGIF,
    created_at: "",
    link: "https://github.com/gaqno/moovegan_frontend/",
    name: "Moo Vegan",
    tecnologies: ["React", "React Native", "TailwindCSS", "JavaScript", "TypeScript"],
  },
  {
    banner: MarvelIMG,
    created_at: "",
    link: "https://marvel-nuxt3.vercel.app/",
    name: "Marvel Heroes",
    tecnologies: ["Vue", "Nuxt", "TailwindCSS", "JavaScript", "TypeScript"],
  },
  {
    banner: FuriousGIF,
    created_at: "",
    link: "https://pesca-furiosa.vercel.app/",
    name: "Pesca Furiosa",
    tecnologies: ["Vue", "Nuxt", "TailwindCSS", "JavaScript", "TypeScript"],
  },
]);

const fetchGit = () => {
  app.setLoading(true);
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
  AOS.init({ duration: 1200 });
  fetchGit()
    .then((data) => {
      git.value = {
        ...git.value,
        ...data as User,
      };
    })
    .catch(err => console.warn(err))
    .finally(() => app.setLoading(false));
});
</script>
