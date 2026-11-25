'use client';

import { useState } from "react";
import { ArrowUpRight, Play, Sparkles, Video, Image as ImageIcon, WandSparkles, Menu, Plus, Upload, ChevronDown, Zap, Clock3, Globe2 } from "lucide-react";

const templates = [
  { title: "Cinematic Character", tag: "TREND", time: "10 sn", gradient: "linear-gradient(135deg,#5b3b9d,#d17a9b)" },
  { title: "Anime Transformation", tag: "POPULAR", time: "8 sn", gradient: "linear-gradient(135deg,#174d70,#51a7a0)" },
  { title: "Luxury Product Shot", tag: "NEW", time: "5 sn", gradient: "linear-gradient(135deg,#775b35,#d9b878)" },
  { title: "Fantasy World", tag: "TREND", time: "10 sn", gradient: "linear-gradient(135deg,#233b76,#8c64c6)" },
];

export default function Home() {
  const [mode, setMode] = useState("video");
  const [model, setModel] = useState("Seedance");
  const [prompt, setPrompt] = useState("");
  const [fileName, setFileName] = useState("");
  const [language, setLanguage] = useState("TR");
  return (
    <main className="shell">
      <aside className="sidebar">
        <a className="brand" href="#"><span className="brandMark">AI</span><span>AI.LAB<small>CREATIVE STUDIO</small></span></a>
        <button className="newBtn"><Plus size={17}/> Yeni oluştur</button>
        <div className="navLabel">ÇALIŞMA ALANI</div>
        <a className="navItem active"><Sparkles size={18}/> Keşfet</a>
        <a className="navItem"><Video size={18}/> Video oluştur</a>
        <a className="navItem"><ImageIcon size={18}/> Görsel oluştur</a>
        <a className="navItem"><WandSparkles size={18}/> Şablonlar</a>
        <div className="navLabel second">KÜTÜPHANE</div>
        <a className="navItem"><Clock3 size={18}/> Oluşturma geçmişi</a>
        <a className="navItem"><Zap size={18}/> Krediler</a>
        <div className="sideBottom"><div className="creditBox"><div className="creditTop"><span>Kredi bakiyesi</span><Zap size={15}/></div><strong>-- <small>kredi</small></strong><p>Üretim sağlayıcısı bağlandığında aktif olur.</p><button>Planları incele <ArrowUpRight size={14}/></button></div><div className="profile"><div className="avatar">A</div><div><b>AI.LAB Üyesi</b><small>Hoş geldin</small></div><ChevronDown size={16}/></div></div>
      </aside>

      <section className="main">
        <header className="topbar"><div className="mobileBrand">AI.LAB</div><div className="crumb">Studio <span>/</span> Keşfet</div><div className="topActions"><button className="language" onClick={()=>setLanguage(language==="TR"?"EN":"TR")}><Globe2 size={15}/>{language}</button><button className="upgrade">Planları keşfet <ArrowUpRight size={15}/></button><div className="avatar smallAvatar">A</div></div></header>
        <div className="content">
          <section className="hero">
            <div className="heroCopy"><div className="eyebrow"><span className="liveDot"/> AI CREATIVE WORKSPACE</div><h1>Hayal et.<br/><span>AI ile gerçeğe dönüştür.</span></h1><p>En yeni yapay zekâ modelleriyle video ve görseller üret. Fikrini yaz, modelini seç ve yaratmaya başla.</p><div className="heroButtons"><button className="primary" onClick={()=>document.getElementById("creator")?.scrollIntoView({behavior:"smooth"})}>Hemen oluştur <ArrowUpRight size={17}/></button><button className="secondary" onClick={()=>document.getElementById("templates")?.scrollIntoView({behavior:"smooth"})}><Play size={15}/> Şablonları keşfet</button></div></div>
            <div className="heroArt"><div className="orb orbOne"/><div className="orb orbTwo"/><div className="artCard"><div className="artTop"><span>AI.LAB / GENERATIVE</span><Sparkles size={15}/></div><div className="artVisual"><div className="artSun"/><div className="artMountain m1"/><div className="artMountain m2"/><div className="artMountain m3"/></div><div className="artFooter"><span>Dreamscape 001</span><span className="artPill">AI GENERATED</span></div></div><div className="floatingTag"><Sparkles size={14}/> Your imagination, amplified</div></div>
          </section>

          <section className="creator" id="creator">
            <div className="sectionHead"><div><div className="eyebrow muted">CREATE FROM SCRATCH</div><h2>Üretim alanı</h2><p>Fikrini anlat, referansını yükle, modelini seç.</p></div><span className="beta">ÖN İZLEME</span></div>
            <div className="creatorPanel">
              <div className="modeTabs"><button className={mode==="video"?"selected":""} onClick={()=>setMode("video")}><Video size={16}/> Video</button><button className={mode==="image"?"selected":""} onClick={()=>setMode("image")}><ImageIcon size={16}/> Görsel</button></div>
              <label className="fieldLabel">MODEL</label><div className="modelRow">{["Seedance","Kling","Wan"].map(m=><button key={m} className={`modelChip ${model===m?"chosen":""}`} onClick={()=>setModel(m)}>{m}{model===m&&<span>✓</span>}</button>)}</div>
              <label className="fieldLabel" htmlFor="prompt">PROMPT</label><textarea id="prompt" value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder={mode==="video"?"Nasıl bir video oluşturmak istiyorsun? Sahneyi, hareketi ve kamera açısını anlat...":"Nasıl bir görsel oluşturmak istiyorsun? Stil, ışık ve kompozisyonu anlat..."}/>
              <div className="uploadRow"><label className="uploadBox"><Upload size={18}/><span>{fileName || "Referans görsel veya video yükle"}</span><small>PNG, JPG, WEBP veya MP4</small><input type="file" accept="image/*,video/*" onChange={e=>setFileName(e.target.files?.[0]?.name || "")}/></label><div className="settings"><div><span>En-boy oranı</span><b>9:16 <ChevronDown size={14}/></b></div><div><span>Süre</span><b>5 sn <ChevronDown size={14}/></b></div></div></div>
              <div className="generateRow"><span><Zap size={15}/> API bağlantısı bekleniyor</span><button className="generate" disabled><Sparkles size={16}/> Oluştur</button></div>
              <p className="notice">Bu arayüz ilk sürüm önizlemesidir. Gerçek üretim için model sağlayıcı API bağlantıları ve kredi sistemi kurulmalıdır.</p>
            </div>
          </section>

          <section className="templates" id="templates"><div className="sectionHead"><div><div className="eyebrow muted">TRENDING TEMPLATES</div><h2>Popüler şablonlar</h2><p>Bir fikir seç, kendi karakterinle yeniden yorumla.</p></div><button className="viewAll">Tümünü gör <ArrowUpRight size={15}/></button></div><div className="templateGrid">{templates.map((t,i)=><article className="templateCard" key={t.title}><div className="templateVisual" style={{background:t.gradient}}><div className="visualGlow"/><div className="visualShape shapeA"/><div className="visualShape shapeB"/><span className="templateTag">{t.tag}</span><button className="playButton" aria-label="Şablon önizlemesi"><Play size={17} fill="currentColor"/></button><span className="duration">{t.time}</span></div><div className="templateInfo"><div><h3>{t.title}</h3><p>{i===0?"Karakterini sinematik sahneye taşı":i===1?"Fotoğrafından anime dönüşümü":i===2?"Ürününe reklam filmi görünümü":"Kendi fantastik dünyanı yarat"}</p></div><ArrowUpRight size={17}/></div></article>)}</div></section>
          <footer>© 2026 AI.LAB Studio <span>Made for creators.</span></footer>
        </div>
      </section>
    </main>
  );
}
