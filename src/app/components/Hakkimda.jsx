"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const Hakkimda = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-black" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black mb-4">Hakkımda</h2>
          <p className="text-base lg:text-lg">
          Merhaba, ben Klinik Psikolog Merve Ünal. İstanbul Kültür Üniversitesi Psikoloji bölümünden mezun olduktan sonra İstinye Universitesinde Klinik Psikoloji yüksek lisans programını tamamlayarak Klinik Psikolog unvanını kazandım. Akademik hayatım boyunca Bağlanma Biçimleri, Psikolojik iyi Oluş, Romantik İlişki Doyumu, Kişilik Bozuklukları gibi konularda derinlemesine araştırmalar yaptım. Çeşitli kurumlarda ve kliniklerde stajlar yaptım ve kariyerim için önemli seminer ve kongrelere katıldım. Oyun Terapisi, Resim Analizi, Çocuk Testleri, Yetişkin Testleri, Aile Danışmanlığı, Psikodinamik Terapi eğitimlerimi ve süpervizyon süreçlerini tamamladım. Çocuk, ergen ve yetişkinler ile Psikodinamik Terapi Ekolü kapsamında çalışmaktayım
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hakkimda;
