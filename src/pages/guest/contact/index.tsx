
import Header from "@/components/common/header";
import { ContactHero } from "@/components/features/contact/contact-hero";
import { ContactSection } from "@/components/features/contact/contact-section";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header />
            <ContactHero />
            <ContactSection />
        </div>
    )
}
