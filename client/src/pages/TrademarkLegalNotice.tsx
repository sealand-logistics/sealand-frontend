import { useEffect } from 'react';
import TnCBG from '../assets/TnCBG.png';

const TrademarkLegalNotice = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white font-lato">
            {/* Hero Section - Matching Service Page Sizing */}
            <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden bg-white">
                <div
                    className="absolute top-2 left-[10px] right-[10px] bottom-0 bg-cover bg-center flex items-center justify-center flex-col px-4"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 240, 230, 0.8), rgba(255, 240, 230, 0.8)), url(${TnCBG})`,
                    }}
                >
                    <h1 className="text-[30px] md:text-5xl font-playfair font-bold text-[#000040] italic drop-shadow-sm text-center">
                        Trademark Legal Notice
                    </h1>
                </div>
            </div>

            {/* Content Section - Full Width with 60px margins matching STC.tsx */}
            <div className="px-[15px] md:px-[60px] py-16 md:py-24">
                <div className="w-full text-gray-800 leading-relaxed space-y-8 text-base text-justify">
                    <p>
                        "SEALAND LOGISTICS®" is a duly registered trademark and proprietary business identifier of the Sealand Logistics Group companies, comprising Sealand Logistics India Services Private Limited ( CIN: U63090WB2005PTC103200) and Sealand Logistics & Shipping Services Private Limited (CIN: U63000WB2017PTC219100 ) , India.
                    </p>
                    <p>
                        All statutory, common law, proprietary, and intellectual property rights in and to the SEALAND LOGISTICS® trademark, trade name, brand identity, goodwill, logos, website content, and associated intellectual property are expressly reserved.
                    </p>
                    <p>
                        Any unauthorized use, reproduction, imitation, adoption, misrepresentation, infringement, dilution, passing off, deceptive similarity, or other unauthorized exploitation of the SEALAND LOGISTICS® trademark, trade identity, brand elements, website content, or related intellectual property is strictly prohibited and may result in appropriate civil and/or criminal proceedings, including claims for injunctive relief, damages, costs, and all other remedies available under applicable law.
                    </p>
                    <p>
                        Sealand Logistics Group is an independent logistics, freight forwarding, and supply chain organization operated by Sealand Logistics India Services Private Limited and Sealand Logistics & Shipping Services Private Limited. Neither Sealand Logistics Group nor its constituent companies are affiliated with, associated with, endorsed by, sponsored by, authorized by, controlled by, or otherwise connected with any third-party entity, organization, shipping line, carrier, logistics provider, or commercial enterprise, except where expressly stated in writing.
                    </p>
                    <p>
                        Any similarity in name, trade identity, branding, business description, or commercial activity with any third-party entity shall not be construed as creating or implying any affiliation, association, sponsorship, endorsement, authorization, partnership, joint venture, agency relationship, or other commercial connection.
                    </p>
                    <p>
                        Any third-party company names, trade names, trademarks, service marks, shipping line names, carrier names, logos, brand identifiers, vessel names, customer references, project references, photographs, cargo images, or other proprietary identifiers appearing on this website are displayed solely for informational, descriptive, nominative, illustrative, or representational purposes relating to logistics, freight forwarding, transportation, project cargo, and supply chain services. The appearance of any such third-party names, trademarks, logos, images, or references shall not be construed as evidence of ownership, affiliation, sponsorship, endorsement, authorization, partnership, agency, joint venture, or any other commercial relationship with Sealand Logistics Group unless expressly stated in writing. All third-party trademarks, logos, trade names, and intellectual property rights remain the exclusive property of their respective owners.
                    </p>
                </div>

                <div className="mt-20 pt-10 border-t border-gray-100 text-center">
                    <p className="text-gray-400 text-[10px] md:text-xs">
                        © 2026 Sealand Logistics Group. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TrademarkLegalNotice;
