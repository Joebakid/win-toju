// app/lib/teamData.tsx
import React from "react";

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  linkedIn: string;
  image?: string;
  fullProfile: React.ReactNode;
}

export const teamMembers: TeamMember[] = [
  { 
    slug: "godwin-ogbaro",
    name: "Deacon Godwin Toju Ogbaro", 
    role: "Chief Executive Officer", 
    linkedIn: "https://www.linkedin.com/in/godwin-ogbaro-845a29a0/",
    image: "/win-toju-photos/1.jpeg",
    fullProfile: (
      <div className="space-y-6 text-corporate-slate text-lg leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-black text-corporate-navy mb-4 leading-tight">
          The Vision, Grit, and Industry Leadership Behind Win-Toju System Enterprise Limited
        </h2>
        <p>
          Every resilient organization is built on a foundation of operational integrity, deep-rooted sector expertise, and an unwavering commitment to execution excellence. At Win-Toju System Enterprise Limited, that foundation is defined by the strategic leadership and decades-long field experience of our Chief Executive Officer, <strong>Deacon Godwin Toju Ogbaro</strong>.
        </p>

        <h3 className="text-xl font-bold text-corporate-red mt-8 mb-2">Technical Foundations & Vocational Roots</h3>
        <p>
          Deacon Ogbaro’s career in the energy landscape began with a strong practical foundation in Delta State. Following his secondary education at Ginuwa Grammar School and early schooling at Idiare Primary School, Gbokoda, he honed his technical discipline at <strong>Sapele Technical College (STC)</strong> from 1984 to 1986. This early technical immersion instilled in him a precise, engineering-minded approach to asset maintenance, system integrity, and structural problem-solving.
        </p>

        <h3 className="text-xl font-bold text-corporate-red mt-8 mb-2">A Proven Legacy in Oilfield Logistics, Marine Asset Management & Field Operations</h3>
        <p>
          Deacon Ogbaro entered the upstream sector in 1987 with <strong>Halliburton Geophysical Services Nigeria Limited</strong>, serving for six years as a Claims Agent and Compensation Officer. In this role, he managed complex community interface dynamics, field claims, and land rights negotiations during major seismic and geophysical survey campaigns. This early experience established his reputation for maintaining community peace, regulatory compliance, and seamless stakeholder alignment in sensitive operational areas.
        </p>
        <p>
          Building on his operational foundation, he expanded into high-stakes <strong>marine logistics and offshore asset management</strong>:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Chevron Nigeria Limited (2012–2021):</strong> Spearheaded the chartering, marine supply, and operational management of specialized marine transportation vessels, marine equipment, and qualified offshore manpower for nearly a decade. He ensured complete compliance with marine safety standards, seaworthiness protocols, and NOGIC JQS / NipeX vendor standards across deepwater and swamp locations.</li>
          <li><strong>Elcrest Exploration & Production Nigeria Limited (2020–2021):</strong> Managed the procurement, chartering, and tactical deployment of heavy-duty tugboats and barges, supporting mission-critical offshore and inland waterway exploration and production logistics.</li>
        </ul>
        <p>
          Across every contract, Deacon Ogbaro has demonstrated an impeccable track record of asset availability, zero-incident safety culture (HSE compliance), and transparent supply chain execution.
        </p>

        <h3 className="text-xl font-bold text-corporate-red mt-8 mb-2">Building Strategic Partnerships Rooted in Integrity</h3>
        <p>
          As CEO of Win-Toju System Enterprise Limited, Deacon Godwin Toju Ogbaro combines over 30 years of hands-on technical experience with high-level enterprise governance. Beyond his extensive corporate credentials, his standing as a Deacon reflects a personal commitment to ethical leadership, absolute transparency, and dependable stewardship.
        </p>
        <p>
          When you collaborate with Win-Toju System Enterprise Limited, you are engaging a partner whose expertise spans the entire value chain—from marine vessel chartering and technical crew deployment to community liaison management and offshore supply chain logistics.
        </p>
        <p>
          When you choose Win-Toju System Enterprise Limited, you partner with a enterprise anchored in proven operational resilience, regulatory compliance, and decades of trust with major IOCs and indigenous E&P operators. Under the leadership of Deacon Godwin Toju Ogbaro, we deliver seamless marine and oilfield support operations that mitigate project risks, guarantee operational uptime, and drive long-term value for your enterprise.
        </p>
      </div>
    )
  },
  { 
    slug: "ogbaro-tosan-francis",
    name: "Mr. Ogbaro Tosan Francis", 
    role: "Financial Director", 
    linkedIn: "#",
    fullProfile: (
      <div className="space-y-6 text-corporate-slate text-lg leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-black text-corporate-navy mb-4 leading-tight">
          Executive Profile: Mr. Ogbaro Tosan Francis
        </h2>
        <p className="font-bold text-corporate-red">Financial Director, Win-Toju System Enterprise Limited</p>
        <hr className="border-gray-200 my-4" />

        <h3 className="text-xl font-bold text-corporate-red mt-8 mb-2">Strategic Financial Governance & Management Leadership</h3>
        <p>
          At Win-Toju System Enterprise Limited, sustainable growth and operational resilience are driven by rigorous financial governance and strategic resource management. Heading our financial operations as Financial Director is <strong>Mr. Ogbaro Tosan Francis</strong>, an accomplished professional whose academic foundation combines advanced business management, entrepreneurial strategy, and engineering discipline.
        </p>

        <h3 className="text-xl font-bold text-corporate-red mt-8 mb-2">Academic Excellence & Technical Foundation</h3>
        <p>
          Mr. Ogbaro holds a <strong>Master’s Degree in Management and Entrepreneurship</strong> from the prestigious <strong>University of Dundee, Scotland, United Kingdom</strong> (2022–2023). This postgraduate specialization equips him with advanced expertise in corporate governance, financial planning, enterprise risk mitigation, and strategic growth management.
        </p>
        <p>
          Complementing his business acumen, Mr. Ogbaro earned a <strong>Bachelor of Engineering in Mechanical Engineering</strong> from <strong>Benson Idahosa University, Benin City, Nigeria</strong> (2015–2020). This technical background provides him with a analytical approach to asset evaluation, operational cost optimization, and technical project financing—a key advantage when structuring financial strategies for complex marine and energy sector operations.
        </p>

        <h3 className="text-xl font-bold text-corporate-red mt-8 mb-2">Operational Discipline & International Experience</h3>
        <p>
          In addition to his financial and technical expertise, Mr. Ogbaro brings international professional experience from the United Kingdom, having served in operational and supervisory roles with <strong>Newcross Healthcare UK</strong> and <strong>Balhousie Care Group Dundee UK</strong>. His background in managing high-compliance operations, strict record-keeping, and resource allocation reflects an acute attention to detail, regulatory adherence, and high ethical standards.
        </p>

        <h3 className="text-xl font-bold text-corporate-red mt-8 mb-2">Driving Growth & Corporate Trust</h3>
        <p>
          As Financial Director, Mr. Ogbaro Tosan Francis oversees Win-Toju System Enterprise Limited’s fiscal strategy, capital allocation, vendor risk assessment, and financial compliance. His unique fusion of UK-trained management discipline and technical engineering expertise ensures that Win-Toju maintains robust financial health, optimal resource utilization, and complete transparency across all project contracts.
        </p>
        <p>
          When clients and partners engage with Win-Toju System Enterprise Limited, they benefit from a financial leadership framework anchored in global standards, strategic efficiency, and absolute accountability.
        </p>
      </div>
    )
  },
  { 
    slug: "betty-ogbaro-owubetime",
    name: "Mrs. Betty Ogbaro Owubetime", 
    role: "General Manager", 
    linkedIn: "#",
    fullProfile: (
      <div className="space-y-6 text-corporate-slate text-lg leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-black text-corporate-navy mb-4 leading-tight">
          The Anchor of Operations: Ogbaro Betty Owubetime
        </h2>
        <p>
          In the fast-paced, high-stakes world of offshore logistics and marine oilfield services, precision is not merely an asset—it is the bedrock upon which every successful mission rests. While powerful tugboats navigate complex waterways and heavy equipment moves across offshore fields, the true engine driving Win-Toju System Enterprise Limited operates seamlessly behind the scenes. At the heart of this operational harmony stands <strong>Ogbaro Betty Owubetime</strong>, Head of Administration and Corporate Governance.
        </p>

        <h3 className="text-xl font-bold text-corporate-red mt-8 mb-2">The Architect of Order and Operational Rhythm</h3>
        <p>
          Betty’s journey is one defined by focus, discipline, and an intrinsic commitment to excellence. Her educational foundation—built through her early years at Oton Primary School in Sapele and Imafidon Comprehensive College in Benin City, culminating in tertiary studies at the National Teacher’s Institute, Kaduna—engrained in her a profound understanding of structured communication, organizational methodology, and leadership psychology.
        </p>
        <p>
          Where others see complex logistics, Betty sees an intricate tapestry that requires meticulous alignment. Across the energy sector, operational delays can compromise entire project timelines. Betty ensures that Win-Toju operates with zero friction. From managing strict vendor compliance protocols and administrative workflows to maintaining accurate regulatory documentation aligned with NOGIC JQS and NipeX standards, her sound judgment and tactical foresight keep the company’s onshore and offshore machinery in perpetual motion.
        </p>

        <h3 className="text-xl font-bold text-corporate-red mt-8 mb-2">Financial Integrity and Stakeholder Synergy</h3>
        <p>
          A enterprise’s reputation in the oil and gas landscape hinges on trust, fiscal discipline, and transparent communication. Possessing sharp financial management skills and a natural talent for human relations, Betty acts as the critical bridge connecting internal team operations, field crews, and external corporate partners.
        </p>
        <p>
          She oversees operational budgeting, back-office cash-flow management, and administrative resource allocation with an unwavering hand. Her approach balances warmth with uncompromising standards—ensuring that every client interface reflects Win-Toju’s core ethos of integrity, efficiency, and reliability.
        </p>

        <h3 className="text-xl font-bold text-corporate-red mt-8 mb-2">Driving the Vision Forward</h3>
        <p>
          More than an administrator, Ogbaro Betty Owubetime is a guardian of the company’s operational standards. Her dedication ensures that long before a vessel leaves the dock or technical manpower steps onto an offshore platform, every legal, financial, and administrative detail has been executed to perfection.
        </p>
        <p>
          When major operators and E&P leaders partner with Win-Toju System Enterprise Limited, they gain more than technical expertise—they secure the peace of mind that comes from a flawlessly managed enterprise. Through Betty’s steadfast stewardship, Win-Toju turns complex marine logistics into a masterclass of order, reliability, and sustained corporate growth.
        </p>
      </div>
    )
  },
  { 
    slug: "mogbusiaghan-dave-oyibote",
    name: "Mr. Mogbusiaghan Dave Oyibote", 
    role: "Project & Local Content Manager", 
    linkedIn: "#",
    image: "/win-toju-photos/Dave.png",
    fullProfile: (
      <div className="space-y-6 text-corporate-slate text-lg leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-black text-corporate-navy mb-4 leading-tight">
          Bridging Technical Precision and Regulatory Compliance: Mr. Mogbusiaghan Dave Oyibote
        </h2>
        <p>
          When high-stakes offshore logistics meet strict Nigerian energy regulations, having a manager who understands both the micro-details of heavy machinery and the macro-dynamics of national compliance makes all the difference. Leading project execution and local content strategy at Win-Toju System Enterprise Limited is <strong>Mr. Mogbusiaghan Dave Oyibote</strong>, a seasoned technical leader whose hands-on expertise ensures that every charter, crew deployment, and energy contract is executed with complete operational integrity.
        </p>

        <h3 className="text-xl font-bold text-corporate-red mt-8 mb-2">A Career Powered by Technical Mastery</h3>
        <p>
          Dave’s journey began with a rigorous technical foundation in Delta State—attending Idiare Primary School, graduating from Ginuwa Grammar School (1984–1988), and earning his Trade Test Grade II & III certifications at Azigbo Technical College (1990–1992). This formal grounding laid the groundwork for a career defined by electrical engineering discipline, power systems maintenance, and real-world industrial problem solving.
        </p>
        <p>
          Forged in the heart of Warri’s industrial corridor, Dave spent years on the front lines of equipment maintenance and technical operations. As a key electrician with <strong>Fmon Nigeria Limited</strong> (1996–2000) and later with <strong>Pedro’s Global Services Limited</strong> (2019–2024), he mastered the intricacies of electrical diagnostic work, power conduit installation, and system safety. This deep, practical background equips him to assess vessel seaworthiness, evaluate onboard electrical infrastructure, and enforce strict HSE standards across all Win-Toju marine assets long before they deploy into deepwater or swamp locations.
        </p>

        <h3 className="text-xl font-bold text-corporate-red mt-8 mb-2">Strategic Management Meets Local Content Expertise</h3>
        <p>
          Beyond his engineering skills, Dave demonstrated exceptional leadership capabilities during his tenure as Manager at <strong>Juwadate Nigeria Limited</strong> in Warri (2009–2010). In this capacity, he directed administrative operations, streamlined project scheduling, and managed cross-functional field teams under tight operational deadlines.
        </p>
        <p>
          Native to Warri North Local Government Area, Dave brings unmatched regional insight and community interface capability to Win-Toju System Enterprise Limited. As Project & Local Content Manager, he ensures that every venture strictly complies with the Nigerian Oil and Gas Industry Content Development (NOGICD) Act and NOGIC JQS requirements. He turns compliance into a strategic advantage—maximizing indigenous capacity utilization while building harmonious, long-term relationships with Niger Delta host communities.
        </p>

        <h3 className="text-xl font-bold text-corporate-red mt-8 mb-2">Delivering Uptime, Safety, and Trust</h3>
        <p>
          At Win-Toju System Enterprise Limited, Mr. Mogbusiaghan Dave Oyibote stands at the intersection of technical excellence and regulatory trust. Whether coordinating field maintenance, auditing marine logistics workflows, or managing technical manpower deployments, his proactive leadership guarantees zero downtime, total safety compliance, and maximum value for IOCs and indigenous E&P operators alike.
        </p>
      </div>
    )
  },
  { 
    slug: "oki-samuel",
    name: "Oki Samuel", 
    role: "Company Secretary", 
    linkedIn: "https://www.linkedin.com/in/okizaweb3pro/",
    image: "/win-toju-photos/sammy.PNG",
    fullProfile: (
      <div className="space-y-6 text-corporate-slate text-lg leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-black text-corporate-navy mb-4 leading-tight">
          Corporate Governance, Compliance, and Environmental Sustainability: Samuel Oki
        </h2>
        <p>
          In an era where oilfield operations demand both regulatory precision and sustainable environmental stewardship, the executive office requires a corporate governance anchor who seamlessly connects administrative rigor with technical insight. Serving as Company Secretary at Win-Toju System Enterprise Limited is <strong>Samuel Oki</strong>, a high-caliber professional whose profile bridges advanced environmental science, academic innovation, and executive secretarial leadership.
        </p>

        <h3 className="text-xl font-bold text-corporate-red mt-8 mb-2">A Powerful Academic Milestone in Petroleum Environmental Science</h3>
        <p>
          Samuel’s authoritative technical background was forged at the prestigious <strong>Federal University of Petroleum Resources, Effurun (FUPRE)</strong>, where he earned a Bachelor of Science (B.Sc.) in Environmental Management and Toxicology (2026). Reflecting top-tier research excellence, his milestone undergraduate thesis—<em>Bioremediation of Crude Oil Contaminated Soil Due to Artisanal Refineries Using Enhanced Biostimulants</em>—addressed one of the most critical challenges in the modern energy landscape. By rigorously evaluating biostimulation techniques to achieve measurable Total Petroleum Hydrocarbon (TPH) reduction, Samuel established himself as a forward-thinking analyst in hydrocarbon remediation, environmental risk assessment, and field sustainability.
        </p>
        <p>
          His technical competence in environmental governance was further tested in the public sector during his industrial stint with the <strong>Delta State Waste Management Board</strong>. Engaging directly in field monitoring, municipal waste streams, and environmental sanitation frameworks, he gained first-hand mastery of regulatory compliance and onshore environmental management protocols.
        </p>

        <h3 className="text-xl font-bold text-corporate-red mt-8 mb-2">Executive Secretarial Mastery and Strategic Corporate Governance</h3>
        <p>
          To complement his scientific discipline, Samuel mastered advanced digital productivity and systems management at the <strong>Rolof Computer Institute</strong> in Warri. This dual expertise—combining environmental science with certified digital office infrastructure—makes him an indispensable asset in executive governance.
        </p>
        <p>As Company Secretary, Samuel functions as the strategic pivot for Win-Toju System Enterprise Limited’s corporate operations:</p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Board & Executive Support:</strong> Directs executive correspondence, board documentation, high-level scheduling, and secretarial oversight for the CEO and board of directors.</li>
          <li><strong>Tender & Compliance Documentation:</strong> Spearheads the compilation, audit, and management of sensitive corporate documentation, project proposals, and regulatory filings for NipeX, NOGIC JQS, and major E&P bid submissions.</li>
          <li><strong>Data Integrity & Document Governance:</strong> Enforces rigorous records management, structured data filing, and secure information flow across all enterprise divisions—including marine logistics, onshore waste management, manpower supply, and claims administration.</li>
          <li><strong>Multi-Stakeholder Communication:</strong> Serves as the primary administrative bridge between internal operational teams, external joint venture partners, IOC compliance officers, and regulatory authorities.</li>
        </ul>

        <h3 className="text-xl font-bold text-corporate-red mt-8 mb-2">Uncompromising Leadership and Institutional Integrity</h3>
        <p>
          Beyond technical documentation, Samuel’s leadership acumen was forged through executive student leadership, fellowship administration, and large-scale event coordination. His commanding communication style, analytical problem-solving, and sharp attention to detail guarantee that Win-Toju’s administrative machinery operates with flawless precision and zero delay.
        </p>
        <p>
          When international oil companies (IOCs), indigenous operators, and corporate partners collaborate with Win-Toju System Enterprise Limited, Samuel Oki ensures that every contract, compliance filing, and administrative workflow meets global institutional standards—delivering total corporate transparency, operational alignment, and unshakeable business trust.
        </p>
      </div>
    )
  },
];

export const getInitials = (name: string) => {
  const cleanName = name.replace(/(Pst\.|Deacon\.|Mr\.|Mrs\.|Miss)\s*/g, '');
  const parts = cleanName.split(" ");
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return cleanName.substring(0, 2).toUpperCase();
};