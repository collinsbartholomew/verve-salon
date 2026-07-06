export interface SiteConfig {
  name: string;
  tagline?: string;
  description?: string;
  email: string;
  phone: string;
  phoneHref: string;
  address?: string;
  googleRating?: string | number;
  googleReviews?: string | number;
  logo?: string;
  ogImage?: string;
  social?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
    pinterest?: string;
    etsy?: string;
    tripadvisor?: string;
    yelp?: string;
    houzz?: string;
    google?: string;
    github?: string;
    x?: string;
  };
  hours?: string;
  weekday?: string;
  weekend?: string;
  trustpilot?: string;
  storeAddress?: string;
  [key: string]: unknown;
}

export const siteConfig: SiteConfig = {
  name: "Verve Salon",
  tagline: "Hair Salon & Barber",
  email: "info@verve.com",
  phone: "+1-800-356-8933",
  phoneHref: "+18003568933",
  address: "758 5th Avenue, New York, NY",
};

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Salon",
    href: "/salon",
    children: [
      { label: "Team", href: "/salon/team" },
      { label: "Join Us", href: "/salon/join-our-team" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Hair Salon", href: "/services/hair-salon" },
      { label: "Barber", href: "/services/barber" },
      { label: "Beauty", href: "/services/beauty" },
      { label: "Nails", href: "/services/nails" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
];

export interface ServiceCategory {
  category: string;
  services: { name: string; price: string }[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    category: "Hair",
    services: [
      { name: "Verve Salon", price: "$65" },
      { name: "Verve Salon", price: "$45" },
      { name: "Verve Salon", price: "$120" },
      { name: "Verve Salon", price: "$150" },
      { name: "Verve Salon", price: "$200" },
      { name: "Verve Salon", price: "$300+" },
      { name: "Verve Salon", price: "$250" },
      { name: "Verve Salon", price: "$35" },
    ],
  },
  {
    category: "Beauty",
    services: [
      { name: "Verve Salon", price: "$75" },
      { name: "Verve Salon", price: "$120" },
      { name: "Verve Salon", price: "$150" },
      { name: "Verve Salon", price: "$25" },
      { name: "Verve Salon", price: "$90" },
      { name: "Verve Salon", price: "$30+" },
      { name: "Verve Salon", price: "$45" },
    ],
  },
  {
    category: "Nails",
    services: [
      { name: "Verve Salon", price: "$35" },
      { name: "Verve Salon", price: "$50" },
      { name: "Verve Salon", price: "$50" },
      { name: "Verve Salon", price: "$70" },
      { name: "Verve Salon", price: "$15+" },
      { name: "Verve Salon", price: "$20" },
    ],
  },
];

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Verve Salon",
    role: "Lead Stylist",
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/team-1.jpg",
  },
  {
    name: "Verve Salon",
    role: "Senior Colorist",
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/team-2.jpg",
  },
  {
    name: "Verve Salon",
    role: "Nail Artist",
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/team-3.jpg",
  },
  {
    name: "Verve Salon",
    role: "Master Barber",
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/team-4.jpg",
  },
];

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Verve Salon",
    role: "Client",
    text: "Absolutely love my new look! The team at Coiffure is incredibly talented and professional. They took the time to understand exactly what I wanted and delivered beyond my expectations.",
    avatar: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/testimonial-1.jpg",
  },
  {
    name: "Verve Salon",
    role: "Client",
    text: "Best salon experience I've ever had. The atmosphere is welcoming and the stylists truly care about making you look and feel your best. Highly recommend!",
    avatar: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/testimonial-2.jpg",
  },
  {
    name: "Verve Salon",
    role: "Client",
    text: "I've been coming to Coiffure for years and wouldn't go anywhere else. Their attention to detail and commitment to quality is unmatched.",
    avatar: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/testimonial-3.jpg",
  },
  {
    name: "Verve Salon",
    role: "Client",
    text: "The color work at Coiffure is absolutely stunning. Mark and his team are true artists. Every visit leaves me feeling refreshed and confident.",
    avatar: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/testimonial-4.jpg",
  },
];

export const galleryImages = [
  {
    src: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/gallery-1.jpg",
    alt: "Salon interior",
  },
  {
    src: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/gallery-2.jpg",
    alt: "Hair styling",
  },
  {
    src: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/gallery-3.jpg",
    alt: "Color treatment",
  },
  {
    src: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/gallery-4.jpg",
    alt: "Nail art",
  },
  {
    src: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/gallery-5.jpg",
    alt: "Barber services",
  },
  {
    src: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/gallery-6.jpg",
    alt: "Styling session",
  },
];

// Detailed team member with slug for individual pages
export interface TeamMemberDetail {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
  experience: string;
}

export const teamMemberDetails: TeamMemberDetail[] = [
  {
    slug: "adrian-howard",
    name: "Verve Salon",
    role: "Master Stylist",
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/team-1.jpg",
    bio: "Adrian brings over 15 years of experience to every client visit. His passion for precision cutting and modern styling techniques has earned him a loyal following. Adrian stays at the forefront of industry trends, attending workshops worldwide.",
    specialties: ["Precision Cuts", "Men's Styling", "Textured Hair", "Updos"],
    experience: "15+ years",
  },
  {
    slug: "donald-howard",
    name: "Verve Salon",
    role: "Senior Barber",
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/team-4.jpg",
    bio: "Donald is a master of the classic barbering arts with a modern twist. From traditional hot towel shaves to contemporary fades, his craftsmanship is unmatched. He specializes in beard sculpting and grooming for the modern gentleman.",
    specialties: ["Classic Shaves", "Fades", "Beard Sculpting", "Grooming"],
    experience: "12+ years",
  },
  {
    slug: "harold-roberson",
    name: "Verve Salon",
    role: "Color Specialist",
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/team-2.jpg",
    bio: "Harold is a certified color expert with an artist's eye for tone and dimension. From natural highlights to bold fashion colors, his color work transforms looks. He is trained in the latest balayage and ombré techniques.",
    specialties: ["Balayage", "Highlights", "Fashion Color", "Color Correction"],
    experience: "10+ years",
  },
  {
    slug: "isabella-parsons",
    name: "Verve Salon",
    role: "Style Director",
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/team-3.jpg",
    bio: "Isabella is the creative visionary behind many of our signature looks. With formal training in London and Milan, she brings an editorial sensibility to everyday styling. Her consultations are thorough, ensuring every client leaves confident.",
    specialties: ["Editorial Styling", "Bridal Hair", "Makeup", "Trend Forecasting"],
    experience: "14+ years",
  },
  {
    slug: "jessica-smith",
    name: "Verve Salon",
    role: "Junior Stylist",
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/team-2.jpg",
    bio: "Jessica is a rising star in the salon, bringing fresh energy and contemporary techniques. A recent graduate of the Arrojo Academy, she excels in lived-in color and modern shags. Her warmth and attention to detail make every visit enjoyable.",
    specialties: ["Lived-in Color", "Modern Shags", "Blowouts", "Styling"],
    experience: "3+ years",
  },
  {
    slug: "mark-harris",
    name: "Verve Salon",
    role: "Nail Technician",
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/team-1.jpg",
    bio: "Mark is a meticulous nail artist known for his intricate nail art and flawless gel applications. His creative designs range from minimalist elegance to bold statement pieces. He uses only premium, long-lasting products.",
    specialties: ["Gel Nails", "Nail Art", "Acrylic Sets", "Manicures"],
    experience: "8+ years",
  },
  {
    slug: "minnie-haynes",
    name: "Verve Salon",
    role: "Esthetician",
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/team-3.jpg",
    bio: "Minnie is a licensed esthetician passionate about skin health and rejuvenation. She customizes every facial and skin treatment to address individual concerns. Her holistic approach combines advanced techniques with premium skincare products.",
    specialties: ["Facials", "Waxing", "Skin Treatments", "Brow Shaping"],
    experience: "9+ years",
  },
  {
    slug: "robert-vargas",
    name: "Verve Salon",
    role: "Massage Therapist",
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/team-4.jpg",
    bio: "Robert is a licensed massage therapist who brings relaxation and relief to our clients. Specializing in deep tissue and hot stone massage, he helps clients unwind and recover. His sessions are tailored to relieve tension from head to toe.",
    specialties: ["Deep Tissue", "Hot Stone", "Scalp Massage", "Relaxation"],
    experience: "11+ years",
  },
];

// Service detail pages
export interface ServiceDetail {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  items: { name: string; price: string; description: string }[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "haircuts",
    name: "Verve Salon",
    tagline: "Hair Salon tagline: Precision cuts tailored to your style. Barber",
    description: "Verve Salon offers expert hair styling, barbering, color treatments, and scalp therapies in a modern, welcoming environment staffed by certified professionals.",
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/hair-salon-hero.jpg",
    items: [
      { name: "Verve Salon", price: "$65", description: "Full consultation, shampoo, precision cut, and blow-dry style." },
      { name: "Verve Salon", price: "$35", description: "Classic or contemporary cut with hot towel finish." },
      { name: "Verve Salon", price: "$25", description: "Fun, gentle cuts for kids under 12." },
      { name: "Verve Salon", price: "$15", description: "Quick trim to maintain your fringe." },
      { name: "Verve Salon", price: "$50", description: "Cutting on dry hair for maximum precision." },
    ],
  },
  {
    slug: "coloring",
    name: "Verve Salon",
    tagline: "Hair Salon tagline: "Transform your look with vibrant color." Barber",
    description: "From subtle sun-kissed highlights to bold fashion statements, our color specialists create stunning, dimensional results. We use premium, ammonia-free color products to protect your hair while delivering rich, long-lasting color.",
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/gallery-3.jpg",
    items: [
      { name: "Verve Salon", price: "$90", description: "Full head application for all-over color." },
      { name: "Verve Salon", price: "$120", description: "Face-framing highlights for a natural glow." },
      { name: "Verve Salon", price: "$180", description: "Dimensional color throughout." },
      { name: "Verve Salon", price: "$200", description: "Hand-painted, natural-looking highlights." },
      { name: "Verve Salon", price: "$250+", description: "Expert correction for previous color mishaps." },
    ],
  },
  {
    slug: "styling",
    name: "Verve Salon",
    tagline: "Hair Salon tagline: "Perfect looks for every occasion." Barber",
    description: "Whether it's a night out or your everyday routine, our styling services ensure you look polished and confident. From sleek blowouts to glamorous updos, we create looks that last and turn heads.",
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/gallery-6.jpg",
    items: [
      { name: "Verve Salon", price: "$45", description: "Shampoo, conditioning treatment, and professional blow-dry." },
      { name: "Verve Salon", price: "$85", description: "Elegant updo for weddings and events." },
      { name: "Verve Salon", price: "$150", description: "Includes trial session and day-of styling." },
      { name: "Verve Salon", price: "$35", description: "Intensive moisture and repair treatment." },
      { name: "Verve Salon", price: "$25", description: "Flat iron or curling iron finishing." },
    ],
  },
  {
    slug: "treatments",
    name: "Verve Salon",
    tagline: "Hair Salon tagline: "Restore and revitalize your hair." Barber",
    description: "Our professional hair treatments repair damage, restore moisture, and strengthen hair from within. Using premium ingredients and advanced formulas, we customize every treatment to address your specific hair concerns.",
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/gallery-5.jpg",
    items: [
      { name: "Verve Salon", price: "$250", description: "Smoothing treatment that eliminates frizz for up to 3 months." },
      { name: "Verve Salon", price: "$35", description: "Intensive repair for damaged and dry hair." },
      { name: "Verve Salon", price: "$45", description: "Deep cleansing treatment to remove buildup." },
      { name: "Verve Salon", price: "$50", description: "Professional bond-building treatment." },
      { name: "Verve Salon", price: "$30", description: "Nourishing oil treatment for shine and softness." },
    ],
  },
  {
    slug: "extensions",
    name: "Verve Salon",
    tagline: "Hair Salon tagline: "Length, volume, and confidence." Barber",
    description: "Achieve the hair of your dreams with our premium extension services. We use 100% Remy human hair and specialized application techniques for a seamless, natural look. Each set is custom-colored to match your shade perfectly.",
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/gallery-1.jpg",
    items: [
      { name: "Verve Salon", price: "$300+", description: "Seamless, lightweight extensions for natural volume." },
      { name: "Verve Salon", price: "$500+", description: "Custom wefted extensions for maximum versatility." },
      { name: "Verve Salon", price: "$150+", description: "Temporary extensions for special occasions." },
      { name: "Verve Salon", price: "$75", description: "Adjustment and re-taping every 6-8 weeks." },
      { name: "Verve Salon", price: "$50", description: "Safe, damage-free removal service." },
    ],
  },
];

// Product pages
export interface Product {
  slug: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  category: string;
}

export const products: Product[] = [
  {
    slug: "argan-oil",
    name: "Verve Salon",
    brand: "Coiffure Essentials",
    price: "$38",
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/gallery-2.jpg",
    shortDescription: "Nourishing pure argan oil for silky, frizz-free hair.",
    fullDescription: "Our signature Argan Oil Treatment is crafted from 100% cold-pressed Moroccan argan oil. This lightweight serum absorbs instantly, taming flyaways and adding brilliant shine without weighing hair down. Suitable for all hair types, it protects against heat damage up to 450°F.",
    benefits: ["Eliminates frizz", "Adds brilliant shine", "Heat protection up to 450°F", "UV protection", "Lightweight formula"],
    category: "Hair Care",
  },
  {
    slug: "keratin-treatment",
    name: "Verve Salon",
    brand: "Coiffure Pro",
    price: "$65",
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/gallery-3.jpg",
    shortDescription: "Professional-grade keratin treatment for at-home use.",
    fullDescription: "Bring the salon experience home with our Keratin Smoothing Kit. This professional-grade formula smooths the hair cuticle, eliminating frizz and adding mirror-like shine. Results last up to 6 weeks with proper care. Includes shampoo, treatment mask, and finishing serum.",
    benefits: ["Professional results at home", "Lasts up to 6 weeks", "Reduces styling time by 50%", "Restores damaged hair", "Sulfate-free formula"],
    category: "Hair Care",
  },
  {
    slug: "hair-mask",
    name: "Verve Salon",
    brand: "Coiffure Essentials",
    price: "$42",
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/gallery-4.jpg",
    shortDescription: "Intensive repair mask for damaged and over-processed hair.",
    fullDescription: "Our Deep Repair Hair Mask penetrates the hair shaft to repair damage from the inside out. Enriched with biotin, collagen, and argan oil, it reconstructs broken bonds and restores elasticity. Use once a week for salon-soft, resilient hair.",
    benefits: ["Repares damaged bonds", "Restores elasticity", "Deep hydration", "Reduces breakage by 80%", "Color-safe formula"],
    category: "Hair Care",
  },
  {
    slug: "styling-serum",
    name: "Verve Salon",
    brand: "Coiffure Pro",
    price: "$32",
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/gallery-5.jpg",
    shortDescription: "Flexible hold serum for polished, touchable styles.",
    fullDescription: "Our Style Finish Serum provides flexible, lightweight hold while adding definition and shine. The anti-humidify formula keeps styles in place all day without stiffness or flaking. Perfect for blowouts, waves, and textured looks.",
    benefits: ["Flexible hold", "Anti-humidity formula", "No flaking or stiffness", "UV protection", "Touchable finish"],
    category: "Styling",
  },
  {
    slug: "beard-oil",
    name: "Verve Salon",
    brand: "Coiffure Men",
    price: "$28",
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/gallery-6.jpg",
    shortDescription: "Premium beard oil for softness, shine, and skin health.",
    fullDescription: "Our Beard Grooming Oil softens coarse beard hair while nourishing the skin underneath. A blend of jojoba, cedarwood, and sandalwood oils keeps your beard looking groomed and smelling great. Absorbs quickly without greasy residue.",
    benefits: ["Softens coarse hair", "Moisturizes skin underneath", "Non-greasy formula", "Woodsy cedarwood scent", "Reduces itch and flaking"],
    category: "Grooming",
  },
];

// Blog posts
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "hair-care-tips",
    title: "10 Essential Hair Care Tips for Healthy, Gorgeous Hair",
    excerpt: "Discover the professional secrets our stylists swear by for maintaining beautiful, healthy hair between salon visits.",
    content: `Maintaining healthy hair doesn't have to be complicated. Our expert stylists have compiled their top tips to keep your locks looking salon-fresh every day.

1. **Wash Less Often** – Over-washing strips natural oils. Aim for 2-3 times per week, depending on your hair type.

2. **Use Lukewarm Water** – Hot water lifts the cuticle, causing frizz and color fading. Rinse with cool water to seal in moisture and shine.

3. **Invest in Quality Products** – Salon-grade shampoos and conditioners are concentrated, so you use less and get better results.

4. **Never Skip Conditioner** – Even if you use a 2-in-1, a dedicated conditioner provides deeper hydration and detangling.

5. **Heat Protectant is Non-Negotiable** – Apply before any heat styling. Our Argan Oil Treatment offers protection up to 450°F.

6. **Get Regular Trims** – Every 8-12 weeks to prevent split ends from traveling up the shaft.

7. **Deep Condition Weekly** – Our Deep Repair Hair Mask restores moisture and repairs damage from the inside out.

8. **Brush Gently** – Start from the ends and work your way up to prevent breakage.

9. **Protect Hair at Night** – Use a silk pillowcase or loose braid to reduce friction and tangling.

10. **Eat for Your Hair** – Protein, biotin, and omega-3s support hair growth and strength from within.`,
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/gallery-2.jpg",
    author: "Isabella Parsons",
    date: "May 15, 2026",
    category: "Hair Care",
    readTime: "5 min read",
  },
  {
    slug: "color-trends",
    title: "Hair Color Trends We're Loving This Season",
    excerpt: "From warm caramel tones to icy platinum, explore the color trends our clients are requesting most this year.",
    content: `This season's color trends are all about dimension, warmth, and personalization. Here's what's trending at Coiffure.

**Caramel Honey Balayage** – A warm, sun-kissed blend that flatters every skin tone. This low-maintenance option grows out beautifully.

**Copper Renaissance** – Rich copper and auburn tones are making a major comeback. They add warmth and vibrancy, especially on medium to dark bases.

**Icy Platinum** – Bold and editorial, platinum continues to dominate. Our color specialists achieve this with a careful lightening process and toning session.

**Mushroom Brown** – An ashy, cool-toned brunette that looks effortless and modern. Perfect for those wanting a subtle change.

**Face-Framing Money Pieces** – Bold, contrasting pieces around the face that add instant dimension without committing to full highlights.

**Root Shadow Technique** – A deeper root that blends seamlessly into lighter ends, extending time between appointments.

Book a color consultation with Harold to find your perfect shade.`,
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/gallery-3.jpg",
    author: "Harold Roberson",
    date: "May 8, 2026",
    category: "Color",
    readTime: "4 min read",
  },
  {
    slug: "winter-hair-care",
    title: "Winter Hair Care: Protecting Your Locks in Cold Weather",
    excerpt: "Cold air, dry heat, and hats can wreak havoc on your hair. Here's how to keep it healthy all season.",
    content: `Winter can be brutal on hair. Between the dry outdoor air and heated indoor environments, moisture is sapped from your strands. Here's how to combat winter hair damage.

**Switch to a Moisturizing Shampoo** – Your summer clarifying shampoo is too stripping for winter. Swap to a hydrating formula like our Coiffure Moisture Shampoo.

**Deep Condition More Often** – Increase from weekly to twice-weekly treatments. Our Deep Repair Hair Mask is perfect for this.

**Limit Heat Styling** – Air-dry when possible. When you do use heat, always apply a protectant first.

**Don't Forget UV Protection** – Yes, UV rays are still present in winter. Snow reflects sunlight, increasing exposure.

**Combat Static** – A few drops of our Argan Oil Treatment on ends eliminates static instantly. Avoid over-brushing, which increases friction.

**Wear Silk-Lined Hats** – Cotton and wool hats cause friction and breakage. A silk lining protects your hair while keeping you warm.

**Use a Humidifier** – Adding moisture to your home air prevents your hair and scalp from drying out.

**Stay Hydrated** – Drinking water supports hair health from the inside out, even in winter.`,
    image: "https://coiffure.vamtam.com/wp-content/uploads/2023/10/gallery-1.jpg",
    author: "Isabella Parsons",
    date: "April 20, 2026",
    category: "Tips",
    readTime: "6 min read",
  },
];
