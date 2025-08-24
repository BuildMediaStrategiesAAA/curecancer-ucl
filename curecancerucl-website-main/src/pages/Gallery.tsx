import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Wishlist/Card";

type WishItem = {
  id: string;
  name: string;
  status: "active" | "funded";
  imageUrl: string;
  tagline: string;
  description: string;
  donateUrl?: string;
};

const WISHLIST: WishItem[] = [
  {
    id: "promethion-2-solo",
    name: "PromethION 2 Solo",
    status: "active",
    imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop",
    tagline: "High-throughput nanopore sequencing, accessible and portable.",
    description: "Enables real-time, scalable long-read sequencing for cancer genomics: structural variants, methylation, and transcript isoforms. Supports rapid turnaround for translational studies.",
    donateUrl: "https://your-donate-link.example/promethion-2-solo"
  },
  {
    id: "novocyte-penteon-u7v7b6y6r4",
    name: "NovoCyte Penteon U7V7B6Y6R4",
    status: "funded",
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    tagline: "5-laser, 30+ parameter flow cytometer.",
    description: "Advanced multiparameter flow cytometry supporting high-content immunophenotyping and functional assays in oncology."
  },
  {
    id: "automatic-pipette-filler",
    name: "Automatic Pipette Filler (x8)",
    status: "funded",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    tagline: "Improve throughput and ergonomics.",
    description: "Eight electronic pipette controllers for parallel sample handling in high-volume prep."
  },
  {
    id: "eppendorf-thermotop",
    name: "Eppendorf ThermoTop",
    status: "funded",
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    tagline: "Condensation-free PCR plate sealing.",
    description: "Heated lid to prevent condensation and evaporation, improving PCR consistency."
  },
  {
    id: "alpha-cycler-1",
    name: "Alpha Cycler 1",
    status: "funded",
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    tagline: "Reliable, flexible PCR thermocycler.",
    description: "Programmable gradient PCR for method development and routine diagnostics research."
  },
  {
    id: "eppendorf-thermomixer-c",
    name: "Eppendorf ThermoMixer C",
    status: "funded",
    imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop",
    tagline: "Precision heating and mixing.",
    description: "Uniform incubation with controlled mixing for DNA/RNA/protein workflows."
  },
  {
    id: "novocyte-advanteon-v6b5r3",
    name: "NovoCyte Advanteon V6B5R3",
    status: "funded",
    imageUrl: "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?w=800&h=600&fit=crop",
    tagline: "Compact, high-performance flow cytometer.",
    description: "Multi-laser analysis with intuitive software for routine immunology panels."
  },
  {
    id: "xcell-surelock-mini-cell",
    name: "XCell SureLock Mini-Cell (x4)",
    status: "funded",
    imageUrl: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
    tagline: "Robust mini gel electrophoresis.",
    description: "Four mini-cells for parallel protein/NA separations to speed verification steps."
  }
];

export default function Wishlist() {
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Handle ESC key to close open card
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenId(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleCard = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const closeCard = () => {
    setOpenId(null);
  };

  const isFlipped = (id: string) => openId === id;

  // Split items by status
  const activeItems = WISHLIST.filter(item => item.status === 'active');
  const fundedItems = WISHLIST.filter(item => item.status === 'funded');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-x-clip">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Equipment Wishlist
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                Help Fund Life-Saving Research Equipment
              </p>
              <p className="text-muted-foreground">
                Every piece of equipment brings us closer to breakthrough discoveries in cancer research. 
                Explore our current funding goals and see the impact of previous donations.
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/4 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Currently Funding Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Currently Funding</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These projects are actively seeking funding. Your donation directly supports 
                cutting-edge research equipment that will advance cancer treatment and diagnosis.
              </p>
            </div>

            {activeItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {activeItems.map((item) => (
                  <Card
                    key={item.id}
                    item={item}
                    isFlipped={isFlipped(item.id)}
                    onToggle={toggleCard}
                    onClose={closeCard}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">No Active Projects</h3>
                <p className="text-muted-foreground">
                  All current wishlist items have been fully funded. Check back soon for new projects!
                </p>
              </div>
            )}
          </section>

          {/* Fully Funded Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Fully Funded</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Thanks to generous donations, these research equipment purchases have been completed 
                and are now supporting vital cancer research at UCL.
              </p>
            </div>

            {fundedItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {fundedItems.map((item) => (
                  <Card
                    key={item.id}
                    item={item}
                    isFlipped={isFlipped(item.id)}
                    onToggle={toggleCard}
                    onClose={closeCard}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">No Completed Projects Yet</h3>
                <p className="text-muted-foreground">
                  Once equipment is fully funded, it will appear here.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}