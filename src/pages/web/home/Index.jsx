import { useState } from "react";
import WebLayout from "../../../layouts/WebLayout"
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Faq from "./components/Faq";


export default function Index() {
  const [data] = useState({
    stats: [
      {
        title: 'Pengguna Aktif',
        description: 'Komunitas aktif 2.500 pengguna/bulan, membuktikan keandalan SpotOn sebagai solusi manajemen bisnis terpercaya.',
        stats: '2,500'
      },
      {
        title: 'Transaksi',
        description: 'Kelola 50.000 transaksi dengan lancar, mengoptimalkan efisiensi operasional bisnis Anda.',
        stats: '50,000'
      },
      {
        title: 'Laporan',
        description: 'Hasilkan 4.200 laporan komprehensif, membantu pengambilan keputusan yang cerdas untuk bisnis Anda.',
        stats: '10,000'
      }
    ],
    faqs:  [
      {
        "label": "Customer Support",
        "image": "https://images.unsplash.com/photo-1508780709619-79562169bc64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      },
      {
        "label": "User Guides",
        "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
      },
      {
        "label": "Sales Questions",
        "image": "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      }
    ]
  });
  return (
    <WebLayout>
      <Hero/>
      <Stats data={data.stats} />
      <Features />
      <Faq categories={data.faqs} />
    </WebLayout>
  )
}
