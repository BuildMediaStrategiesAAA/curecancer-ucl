import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

export default function UclInstitute() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-x-clip">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                About the UCL Cancer Institute
              </h1>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/4 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>

        {/* Overview Section */}
        <section className="section">
          <div className="container">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Overview</h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg">
                  The UCL Cancer Institute is one of the world's leading cancer research centres, bringing together over 400 researchers from across UCL to tackle cancer through innovative research, education, and clinical translation.
                </p>
                <p>
                  Established as part of University College London, the Institute coordinates cancer research activities across multiple departments and faculties, fostering collaboration between basic scientists, clinicians, and public health researchers.
                </p>
                <p>
                  Our mission is to reduce the burden of cancer through world-class research that leads to better prevention, diagnosis, treatment, and care for cancer patients and their families.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Contact Section */}
        <section className="section bg-card">
          <div className="container">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Location & Contact</h2>
              <div className="glass-card p-8 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    UCL Cancer Institute<br />
                    Paul O'Gorman Building<br />
                    72 Huntley Street<br />
                    London WC1E 6DD<br />
                    United Kingdom
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contact</h3>
                  <p className="text-muted-foreground">
                    Email: <a href="mailto:cancer-institute@ucl.ac.uk" className="text-primary hover:underline">cancer-institute@ucl.ac.uk</a><br />
                    Phone: +44 (0)20 7679 6747
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Departments Section */}
        <section className="section">
          <div className="container">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Research & Departments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Research Areas</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Cancer Biology & Genetics</li>
                    <li>• Immunology & Immunotherapy</li>
                    <li>• Drug Discovery & Development</li>
                    <li>• Cancer Prevention & Early Detection</li>
                    <li>• Radiotherapy & Medical Physics</li>
                    <li>• Surgical Oncology</li>
                    <li>• Palliative & Supportive Care</li>
                    <li>• Cancer Epidemiology</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Departments</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Department of Oncology</li>
                    <li>• Department of Haematology</li>
                    <li>• Division of Surgery & Interventional Science</li>
                    <li>• Department of Medical Physics & Biomedical Engineering</li>
                    <li>• Institute of Immunity & Transplantation</li>
                    <li>• Eastman Dental Institute</li>
                    <li>• Great Ormond Street Institute of Child Health</li>
                    <li>• Institute of Epidemiology & Health Care</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnerships & Networks Section */}
        <section className="section bg-card">
          <div className="container">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Partnerships & Networks</h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg">
                  The UCL Cancer Institute works closely with leading hospitals, research institutions, and industry partners to accelerate the translation of research discoveries into clinical practice.
                </p>
                <p>
                  Key partnerships include collaborations with University College London Hospitals NHS Foundation Trust, The Francis Crick Institute, Cancer Research UK, and numerous international research networks. These partnerships enable large-scale clinical trials, shared resources, and collaborative research programs that would not be possible for any single institution alone.
                </p>
                <p>
                  Through these networks, we contribute to global efforts in cancer research while ensuring that our discoveries benefit patients locally and worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Useful Links Section */}
        <section className="section">
          <div className="container">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Useful Links</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">UCL Resources</h3>
                  <ul className="space-y-3">
                    <li>
                      <a 
                        href="https://www.ucl.ac.uk/cancer/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline"
                      >
                        UCL Cancer Institute Official Website
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.ucl.ac.uk/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline"
                      >
                        University College London
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.uclh.nhs.uk/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline"
                      >
                        UCLH NHS Foundation Trust
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Research Partners</h3>
                  <ul className="space-y-3">
                    <li>
                      <a 
                        href="https://www.cancerresearchuk.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline"
                      >
                        Cancer Research UK
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.crick.ac.uk/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline"
                      >
                        The Francis Crick Institute
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.nihr.ac.uk/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline"
                      >
                        NIHR Biomedical Research Centre
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}