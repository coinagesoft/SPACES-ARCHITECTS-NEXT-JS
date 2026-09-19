import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export const metadata = { title: "Our Team — Spaces Architects@ka" };

// Photos are served straight from /public/assets/Team — not registered in config/site.js.
const teamMembers = [
  { src: "/assets/Team/0. POOJA AGGARWAL - SENIOR INTERIOR DESIGNER.webp", name: "Pooja Aggarwal", role: "Senior Interior Designer" },
  { src: "/assets/Team/1_Pawan Sharma_Senior Associate Architect.webp", name: "Pawan Sharma", role: "Senior Associate Architect" },
  { src: "/assets/Team/2_Aruj Saxena_Associate Architect.webp", name: "Aruj Saxena", role: "Associate Architect" },
  { src: "/assets/Team/3_Vikrant Singh_Associate Architect.webp", name: "Vikrant Singh", role: "Associate Architect" },
  { src: "/assets/Team/4_Payal Patnaik_ARCHITECT.webp", name: "Payal Patnaik", role: "Architect" },
  { src: "/assets/Team/6_Nishtha Dhamija_ARCHITECT.webp", name: "Nishtha Dhamija", role: "Architect" },
  { src: "/assets/Team/7_Aachal_Intern.webp", name: "Aachal", role: "Intern" },
  { src: "/assets/Team/8_Archit_intern.webp", name: "Archit", role: "Intern" },
  { src: "/assets/Team/8_Chavi_intern.webp", name: "Chavi", role: "Intern" },
  { src: "/assets/Team/9_Hemant_intern.webp", name: "Hemant", role: "Intern" },
  { src: "/assets/Team/10_Prajwal_intern.webp", name: "Prajwal", role: "Intern" },
  { src: "/assets/Team/11_Shabad_intern.webp", name: "Shabad", role: "Intern" },
  { src: "/assets/Team/12_Arvind Kumar_Senior Site Associate.webp", name: "Arvind Kumar", role: "Senior Site Associate" },
  { src: "/assets/Team/16_Dharmendra_Senior Site Engineer.webp", name: "Dharmendra", role: "Senior Site Engineer" },
  { src: "/assets/Team/17_Praveen Sharma_Senior Site Engineer.webp", name: "Praveen Sharma", role: "Senior Site Engineer" },
  { src: "/assets/Team/18_Veena Negi_Senior Account Executive.webp", name: "Veena Negi", role: "Senior Account Executive" },
  { src: "/assets/Team/19_Manoj Kumar_Senior Admin.webp", name: "Manoj Kumar", role: "Senior Admin" },
  { src: "/assets/Team/20_Lalit Bhaiya_Senior Admin.webp", name: "Lalit Bhaiya", role: "Senior Admin" },
  { src: "/assets/Team/21_Sanjay Bhaiya_Admin.webp", name: "Sanjay Bhaiya", role: "Admin" },
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
                  src={member.src}
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