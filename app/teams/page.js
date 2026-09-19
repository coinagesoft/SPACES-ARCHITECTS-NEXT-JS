import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import { assetImage } from "@/assets";
import styles from "./page.module.css";

export const metadata = { title: "Our Team — Spaces Architects@ka" };

// ---- Team photos ----
// Served from the media server at assets/Team/ (same as every other image).
// One constant per person — to swap a photo, change the path on that line.
const poojaAggarwal = assetImage("Team/0. POOJA AGGARWAL - SENIOR INTERIOR DESIGNER.webp");
const pawanSharma = assetImage("Team/1_Pawan Sharma_Senior Associate Architect.webp");
const arujSaxena = assetImage("Team/2_Aruj Saxena_Associate Architect.webp");
const vikrantSingh = assetImage("Team/3_Vikrant Singh_Associate Architect.webp");
const payalPatnaik = assetImage("Team/4_Payal Patnaik_ARCHITECT.webp");
const nishthaDhamija = assetImage("Team/6_Nishtha Dhamija_ARCHITECT.webp");
const aachal = assetImage("Team/7_Aachal_Intern.webp");
const archit = assetImage("Team/8_Archit_intern.webp");
const chavi = assetImage("Team/8_Chavi_intern.webp");
const hemant = assetImage("Team/9_Hemant_intern.webp");
const prajwal = assetImage("Team/10_Prajwal_intern.webp");
const shabad = assetImage("Team/11_Shabad_intern.webp");
const arvindKumar = assetImage("Team/12_Arvind Kumar_Senior Site Associate.webp");
const dharmendra = assetImage("Team/16_Dharmendra_Senior Site Engineer.webp");
const praveenSharma = assetImage("Team/17_Praveen Sharma_Senior Site Engineer.webp");
const veenaNegi = assetImage("Team/18_Veena Negi_Senior Account Executive.webp");
const manojKumar = assetImage("Team/19_Manoj Kumar_Senior Admin.webp");
const lalitBhaiya = assetImage("Team/20_Lalit Bhaiya_Senior Admin.webp");
const sanjayBhaiya = assetImage("Team/21_Sanjay Bhaiya_Admin.webp");

// ---- Team members (same order as before) ----
const teamMembers = [
  { image: poojaAggarwal, name: "Pooja Aggarwal", role: "Senior Interior Designer" },
  { image: pawanSharma, name: "Pawan Sharma", role: "Senior Associate Architect" },
  { image: arujSaxena, name: "Aruj Saxena", role: "Associate Architect" },
  { image: vikrantSingh, name: "Vikrant Singh", role: "Associate Architect" },
  { image: payalPatnaik, name: "Payal Patnaik", role: "Architect" },
  { image: nishthaDhamija, name: "Nishtha Dhamija", role: "Architect" },
  { image: aachal, name: "Aachal", role: "Intern" },
  { image: archit, name: "Archit", role: "Intern" },
  { image: chavi, name: "Chavi", role: "Intern" },
  { image: hemant, name: "Hemant", role: "Intern" },
  { image: prajwal, name: "Prajwal", role: "Intern" },
  { image: shabad, name: "Shabad", role: "Intern" },
  { image: arvindKumar, name: "Arvind Kumar", role: "Senior Site Associate" },
  { image: dharmendra, name: "Dharmendra", role: "Senior Site Engineer" },
  { image: praveenSharma, name: "Praveen Sharma", role: "Senior Site Engineer" },
  { image: veenaNegi, name: "Veena Negi", role: "Senior Account Executive" },
  { image: manojKumar, name: "Manoj Kumar", role: "Senior Admin" },
  { image: lalitBhaiya, name: "Lalit", role: "Senior Admin" },
  { image: sanjayBhaiya, name: "Sanjay", role: "Admin" },
];

export default function TeamPage() {
  return (
    <main className={styles.page}>
      <SiteChrome />
      <section className={styles.hero}>
        <div className="site-container">
          <h1>Our Team</h1>
        </div>
      </section>
      <section className={`site-container ${styles.team}`}>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={`${member.name}-${index}`} className={styles.teamMember}>
              <div className={styles.teamImage}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <p>{member.name}</p>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}