/*  inicio  */
window.onload = () => {
    renderizarCartoesCert();
    configurarFiltrosDropdown();
    renderizarCaixasSelecao();
};

/* certificações */
const certificacoes = [
    {
        id: 1,
        nome: "Cisco Certified Support Technician (CCST) Networking",
        instituicao: "Cisco",
        area: "Redes (Fundamentos)",
        nivel: "Iniciante",
        publico: "Estudantes, iniciantes em TI, profissionais em transição de carreira, técnicos de suporte de nível de entrada.",
        habilidades: "Fundamentos de redes (TCP/IP, OSI), segurança básica, endereçamento IP (IPv4/IPv6), solução de problemas e conceitos de redes e dispositivos.",
        requisitos: "Nenhum.",
        formato_prova: "Online ou Presencial, 40-45 Q, 50 min, Múltipla escolha.",
        online_presencial: "Online/Presencial",
        idiomas: "Português, Inglês, Espanhol.",
        validade: "5 anos",
        custo_usd: 125,
        custo_brl: 625,
        beneficios: "Credencial de entrada reconhecida mundialmente. Base sólida para a carreira CCNA/CCNP, comprovando proficiência prática inicial.",
        relevancia: "Excelente porta de entrada para quem quer construir a base de redes antes do CCNA, ideal para iniciantes sem experiência formal em TI."
    },
    {
        id: 2,
        nome: "Cisco Certified Network Associate (CCNA)",
        instituicao: "Cisco",
        area: "Redes (Networking)",
        nivel: "Intermediário",
        publico: "Administradores de rede, técnicos de suporte, engenheiros de rede iniciantes, profissionais de TI que buscam base em redes.",
        habilidades: "Fundamentos de redes IP, switching, roteamento, serviços IP, segurança básica e automação/programabilidade de redes.",
        requisitos: "Nenhum obrigatório, mas 1 ano de experiência com tecnologias de redes Cisco é recomendado.",
        formato_prova: "Presencial (Pearson VUE), Cerca de 100-120 Q, 120 min, Múltipla escolha, Simulações.",
        online_presencial: "Presencial",
        idiomas: "Inglês, Japonês, Chinês, Português (variável).",
        validade: "3 anos",
        custo_usd: 300,
        custo_brl: 1500,
        beneficios: "Alto reconhecimento e empregabilidade global. Essencial para cargos de redes. Potencial de aumento salarial.",
        relevancia: "É o alicerce da carreira de redes. A inclusão de tópicos de automação e redes programáveis garante sua relevância (SDN)."
    },
    {
        
        id: 3,
        nome: "Cisco Certified Network Professional - Enterprise (CCNP Enterprise)",
        instituicao: "Cisco",
        area: "Redes (Networking) - Soluções Empresariais",
        nivel: "Avançado",
        publico: "Engenheiros de rede sênior, especialistas em redes LAN/WAN, arquitetos de rede que projetam e implementam infraestruturas complexas.",
        habilidades: "Implementação e operação de tecnologias de redes empresariais (roteamento, switching, wireless), segurança, sobreposição, e automação em larga escala.",
        requisitos: "Conhecimento de nível CCNA e 3-5 anos de experiência são altamente recomendados. Requer aprovação em 2 exames (Core + Concentração).",
        formato_prova: "Presencial (Pearson VUE), 2 exames (Core + Concentração), 90-120 min por exame.",
        online_presencial: "Presencial",
        idiomas: "Inglês, Japonês.",
        validade: "3 anos",
        custo_usd: 700,
        custo_brl: 3500,
        beneficios: "Porta de entrada para cargos de Engenheiro de Rede Sênior e Arquiteto. Demonstra proficiência em ambientes complexos, impacto salarial significativo.",
        relevancia: "Essencial para lidar com a complexidade das redes empresariais híbridas e a migração para a nuvem. Foca na operação e otimização de infraestruturas modernas e automatizadas."
    },
    {
        id: 4,
        nome: "Google Cloud Certified - Cloud Digital Leader (CDL)",
        instituicao: "Google",
        area: "Nuvem (Estratégia/Fundamentos)",
        nivel: "Iniciante",
        publico: "Profissionais não técnicos, gestores, analistas de negócios, vendas, marketing, ou qualquer pessoa envolvida em iniciativas de transformação digital.",
        habilidades: "Conceitos de nuvem, valor de negócio do GCP, transformação digital, inovação com dados (AI/ML), modernização de infraestrutura, segurança e operações do GCP (visão geral).",
        requisitos: "Nenhum.",
        formato_prova: "Online ou Presencial, 50-60 Q, 90 min, Múltipla escolha.",
        online_presencial: "Online/Presencial",
        idiomas: "Inglês, Japonês, Espanhol, Português, Francês.",
        validade: "3 anos",
        custo_usd: 99,
        custo_brl: 500,
        beneficios: "Credencial de fundação para papéis não técnicos, preenchendo a lacuna entre negócios e tecnologia. Abre caminho para certificações técnicas avançadas no GCP.",
        relevancia: "Essencial para a adoção estratégica da nuvem, garantindo que líderes e gestores compreendam o valor de negócio do GCP e seus principais serviços."
    },
    {
        id: 5,
        nome: "Google Cloud Certified - Professional Data Engineer",
        instituicao: "Google",
        area: "Dados (Data Engineering) e AI/ML",
        nivel: "Intermediário",
        publico: "Engenheiros de dados, analistas de dados sênior, profissionais que projetam, constroem, operacionalizam e gerenciam sistemas de processamento de dados e Machine Learning escaláveis no GCP.",
        habilidades: "Projeto de pipelines de dados, modelagem de dados, construção e operacionalização de soluções de processamento de dados e aprendizado de máquina, garantia de qualidade, segurança e conformidade.",
        requisitos: "3+ anos de experiência no setor e 1+ ano de experiência no projeto e gerenciamento de soluções de dados usando o GCP (recomendado).",
        formato_prova: "Online ou Presencial, 50-60 Q, 2 horas, Múltipla escolha (baseada em cenários).",
        online_presencial: "Online/Presencial",
        idiomas: "Inglês, Japonês, Português, Espanhol.",
        validade: "2 anos",
        custo_usd: 200,
        custo_brl: 1000,
        beneficios: "Alta demanda em um mercado carente de profissionais de dados qualificados. Impacto salarial muito alto, especialmente na área de Big Data e Machine Learning.",
        relevancia: "O Google é líder em Big Data e ML. Esta certificação é crucial para empresas que buscam transformar dados em valor de negócio usando as ferramentas avançadas do GCP."
    },
    {
        id: 6,
        nome: "Google Cloud Certified - Professional Cloud Architect",
        instituicao: "Google",
        area: "Nuvem (Cloud Computing) - Arquitetura",
        nivel: "Avançado",
        publico: "Arquitetos de nuvem, engenheiros de nuvem sênior, profissionais responsáveis pelo design, desenvolvimento e gerenciamento de arquiteturas robustas e dinâmicas no GCP.",
        habilidades: "Planejamento e design de arquitetura de solução em nuvem, gerenciamento de infraestrutura, garantia de segurança e conformidade, otimização de processos técnicos e de negócios.",
        requisitos: "3+ anos de experiência no setor, incluindo 1+ ano de projeto e gerenciamento de soluções no GCP (recomendado).",
        formato_prova: "Online ou Presencial, 50-60 Q, 2 horas, Múltipla escolha (baseada em cenários).",
        online_presencial: "Online/Presencial",
        idiomas: "Inglês, Japonês, Português, Espanhol.",
        validade: "2 anos",
        custo_usd: 200,
        custo_brl: 1000,
        beneficios: "Consistentemente citada como uma das certificações de TI mais bem pagas globalmente. Reconhecimento de alto nível, especialmente em estratégias multi-cloud.",
        relevancia: "O GCP está em rápido crescimento e é a escolha preferida em setores como inteligência artificial, machine learning e análise de dados."
    },
    {
        id: 7,
        nome: "AWS Certified Cloud Practitioner (CLF-C01)",
        instituicao: "AWS (Amazon Web Services)",
        area: "Nuvem (Fundamentos)",
        nivel: "Iniciante",
        publico: "Pessoas em qualquer função (técnica, gerencial, vendas, finanças) que precisam de uma compreensão básica e de alto nível da plataforma AWS.",
        habilidades: "Conceitos de nuvem, valor da AWS, modelo de responsabilidade compartilhada, segurança, custos, economia e os principais serviços da AWS e seus casos de uso.",
        requisitos: "Recomendado 6 meses de exposição à AWS em qualquer função, mas não é obrigatório.",
        formato_prova: "Online ou Presencial (Pearson VUE/PSI), 65 Q, 90 min, Múltipla escolha/resposta.",
        online_presencial: "Online/Presencial",
        idiomas: "Múltiplos, incluindo Português (Brasil).",
        validade: "3 anos",
        custo_usd: 100,
        custo_brl: 500,
        beneficios: "O ponto de partida mais popular e essencial para qualquer carreira em nuvem. Aumenta a alfabetização em nuvem e a empregabilidade em ambientes AWS.",
        relevancia: "Credencial base obrigatória para muitas empresas que iniciam a jornada na AWS. Demonstra conhecimento fundamental da plataforma líder de mercado."
    },
    {
        id: 8,
        nome: "AWS Certified Solutions Architect – Associate (SAA-C03)",
        instituicao: "AWS (Amazon Web Services)",
        area: "Nuvem (Cloud Computing) - Arquitetura",
        nivel: "Intermediário",
        publico: "Arquitetos de soluções, engenheiros de nuvem, profissionais que buscam validar a capacidade de projetar e implantar sistemas escaláveis, de alta disponibilidade e otimizados em custos na AWS.",
        habilidades: "Design de arquiteturas resilientes, de alto desempenho, seguras e otimizadas em custos na AWS. Conhecimento dos principais serviços de computação, rede, armazenamento e banco de dados.",
        requisitos: "1 ano de experiência prática com a AWS e o conhecimento dos principais serviços (recomendado).",
        formato_prova: "Online ou Presencial (Pearson VUE ou PSI), 65 Q, 130 min, Múltipla escolha e Múltipla resposta.",
        online_presencial: "Online/Presencial",
        idiomas: "Múltiplos, incluindo Português.",
        validade: "3 anos",
        custo_usd: 150,
        custo_brl: 750,
        beneficios: "Certificação mais procurada no mercado de nuvem. Alto reconhecimento e significativo aumento na empregabilidade.",
        relevancia: "Essencial para a adoção da nuvem. Foca na prática de arquitetura em cenários reais, sendo um requisito comum em muitas vagas de engenheiro de nuvem."

    },
    {
        id: 9,
        nome: "AWS Certified Security – Specialty (SCS-C01)",
        instituicao: "AWS (Amazon Web Services)",
        area: "Segurança (Security) e Nuvem",
        nivel: "Avançado",
        publico: "Profissionais de segurança, engenheiros de segurança na nuvem, arquitetos de segurança que protegem ambientes e cargas de trabalho na AWS.",
        habilidades: "Projeto e implementação de soluções de segurança para dados, redes e aplicações na AWS. Gerenciamento de identidade e acesso (IAM), logging, monitoramento, e resposta a incidentes.",
        requisitos: "5 anos de experiência em segurança de TI, sendo 2 anos de experiência na proteção de workloads AWS (recomendado). Sugerida a certificação SAA-Associate.",
        formato_prova: "Online ou Presencial (Pearson VUE ou PSI), 65 Q, 170 min, Múltipla escolha e Múltipla resposta.",
        online_presencial: "Online/Presencial",
        idiomas: "Inglês, Japonês, Coreano, Chinês Simplificado.",
        validade: "3 anos",
        custo_usd: 300,
        custo_brl: 1500,
        beneficios: "Altamente valorizada devido à criticidade da segurança na nuvem. Grande impacto salarial e coloca o profissional em uma categoria de especialistas com alta demanda.",
        relevancia: "Com a migração massiva de dados e sistemas para a nuvem, a segurança se tornou a maior prioridade. Prova de proficiência em segurança complexa da AWS."
    },
    {
        id: 10,
        nome: "Microsoft Certified: Azure Fundamentals (AZ-900)",
        instituicao: "Microsoft",
        area: "Nuvem (Cloud Computing) - Fundamentos",
        nivel: "Iniciante",
        publico: "Profissionais de TI, vendas, marketing ou gerência, que precisam de uma compreensão básica dos conceitos de nuvem e dos serviços do Azure.",
        habilidades: "Conceitos de nuvem, serviços principais do Azure (computação, redes, armazenamento), segurança, privacidade, conformidade e preços/SLAs do Azure.",
        requisitos: "Nenhum.",
        formato_prova: "Online ou Presencial (Pearson VUE), 40-60 Q, 60 min, Múltipla escolha.",
        online_presencial: "Online/Presencial",
        idiomas: "Múltiplos, incluindo Português.",
        validade: "Não expira",
        custo_usd: 99,
        custo_brl: 500,
        beneficios: "Ponto de partida crucial para a nuvem. Aumenta a empregabilidade em funções relacionadas ao Azure.",
        relevancia: "Primeiro passo no caminho de certificação do Azure, plataforma que disputa a liderança do mercado de nuvem com a AWS. Alta relevância para soluções híbridas."
    },
    {
        id: 11,
        nome: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
        instituicao: "Microsoft",
        area: "Nuvem (Administração)",
        nivel: "Intermediário",
        publico: "Administradores de Nuvem Azure, profissionais de TI responsáveis por implementar, gerenciar e monitorar ambientes Azure.",
        habilidades: "Gerenciamento de identidades e governança (AD, RBAC), implementação e gerenciamento de armazenamento, implantação de recursos de computação, configuração de redes virtuais, monitoramento e backup.",
        requisitos: "Recomendado 6 meses de experiência prática no Azure e conhecimento de TI fundamental (AZ-900 é útil).",
        formato_prova: "Online ou Presencial (Pearson VUE), 40-60 Q, 100-120 min, Múltipla escolha, Estudos de caso.",
        online_presencial: "Online/Presencial",
        idiomas: "Múltiplos, incluindo Português.",
        validade: "1 ano (Renovação online gratuita)",
        custo_usd: 165,
        custo_brl: 825,
        beneficios: "Certificação principal de nível intermediário na Microsoft Cloud. Essencial para a função de administrador e trampolim para o nível Expert (AZ-305).",
        relevancia: "É o pilar de proficiência para o Azure, com alta demanda no mercado para gerenciar a infraestrutura de nuvem das empresas, crucial para funções operacionais."
    },
    {
        id: 12,
        nome: "Microsoft Certified: Azure Solutions Architect Expert (AZ-305)",
        instituicao: "Microsoft",
        area: "Nuvem (Cloud Computing) - Arquitetura",
        nivel: "Avançado",
        publico: "Arquitetos de Soluções em Nuvem, Engenheiros de Nuvem Sênior, profissionais que projetam e implementam soluções que rodam no Microsoft Azure.",
        habilidades: "Projetar soluções de governança e monitoramento, projetar soluções de identidade e segurança, projetar soluções de armazenamento de dados e de infraestrutura de negócios.",
        requisitos: "A certificação AZ-104: Azure Administrator Associate é recomendada. Requer a aprovação no exame AZ-305.",
        formato_prova: "Online ou Presencial (Pearson VUE), 40-60 Q, 120 min, Inclui estudos de caso complexos.",
        online_presencial: "Online/Presencial",
        idiomas: "Múltiplos, incluindo Português.",
        validade: "1 ano (renovação online gratuita)",
        custo_usd: 165,
        custo_brl: 830,
        beneficios: "Uma das certificações mais bem pagas. Grande impacto salarial e alto reconhecimento para cargos de liderança técnica em nuvem.",
        relevancia: "O papel do Arquiteto de Soluções é crucial para a transformação digital. Essencial para projetar ambientes de nuvem escaláveis, seguros e otimizados em custos no Azure."
    },
    {
        id: 13,
        nome: "Oracle Cloud Infrastructure (OCI) Foundations",
        instituicao: "Oracle",
        area: "Nuvem (Cloud Computing) - Fundamentos",
        nivel: "Iniciante",
        publico: "Profissionais de TI, vendas, marketing e gerência que precisam de uma compreensão fundamental dos serviços do Oracle Cloud Infrastructure (OCI).",
        habilidades: "Conceitos de nuvem, serviços principais de OCI (computação, redes, armazenamento), arquitetura e componentes principais da OCI, segurança básica e princípios de custos/faturamento.",
        requisitos: "Nenhum.",
        formato_prova: "Online ou Presencial (Pearson VUE), 60 Q, 105 min, Múltipla escolha.",
        online_presencial: "Online/Presencial",
        idiomas: "Múltiplos, incluindo Português.",
        validade: "Não expira",
        custo_usd: 0,
        custo_brl: 0,
        beneficios: "Ótima porta de entrada para a nuvem da Oracle, especialmente relevante para empresas que já usam bancos de dados Oracle e estão migrando para a OCI.",
        relevancia: "O OCI está crescendo por oferecer performance robusta e preços competitivos. Certificação crucial para iniciar a jornada na nuvem que está se tornando uma forte competidora."

    },
    {
        id: 14,
        nome: "Oracle Cloud Infrastructure (OCI) Architect Associate (1Z0-1072)",
        instituicao: "Oracle",
        area: "Nuvem (Arquitetura de Infraestrutura)",
        nivel: "Intermediário",
        publicu: "Arquitetos de Nuvem, Engenheiros de Nuvem, Profissionais de TI que projetam e implementam infraestrutura escalável usando o OCI.",
        habilidades: "Arquitetura do OCI, identidade e acesso (IAM), redes (VCNs, VPN, FastConnect), computação e armazenamento (Block/Object/File Storage), bancos de dados (Autonomous Database), alta disponibilidade e segurança.",
        requisitos: "Conhecimento fundamental de OCI (Foundations é útil) e experiência em arquitetura de infraestrutura (recomendado).",
        formato_prova: "Online ou Presencial (Pearson VUE), 50 Q, 90 min, Múltipla escolha.",
        online_presencial: "Online/Presencial",
        idiomas: "Inglês (e outros dependendo da versão do exame).",
        validade: "Política de Recertificação em Nuvem (Geralmente 18 meses).",
        custo_usd: 245,
        custo_brl: 1225,
        beneficios: "Valida o conhecimento para projetar e operar na nuvem Oracle. Alta demanda em empresas que migram grandes bases de dados Oracle para a nuvem.",
        relevancia: "Demonstra proficiência em uma plataforma de nuvem que cresce rapidamente, focada em performance e workloads de banco de dados e aplicações empresariais."
    },
    {
        id: 15,
        nome: "Oracle Certified Professional: Java SE 17 Developer",
        instituicao: "Oracle",
        area: "Desenvolvimento de Software (Java)",
        nivel: "Avançado",
        publico: "Desenvolvedores Java sênior, engenheiros de software que projetam e desenvolvem aplicações usando a Plataforma Java Standard Edition (SE).",
        habilidades: "Proficiência em recursos e APIs do Java SE 17 (lambdas, streams, concorrência, modularidade), manipulação de exceções, coleções, e desenvolvimento de código robusto e eficiente.",
        requisitos: "É necessário passar primeiro no exame de nível Associate (1Z0-829 - Java SE 17 Developer Associate).",
        formato_prova: "Online ou Presencial (Pearson VUE), 60-80 Q, 180 min, Múltipla escolha.",
        online_presencial: "Online/Presencial",
        idiomas: "Inglês, Japonês.",
        validade: "Não expira (para a versão SE 17)",
        custo_usd: 245,
        custo_brl: 1230,
        beneficios: "Selos de qualidade máximo para um Desenvolvedor Java, elevando o impacto salarial. Java é a espinha dorsal de muitas aplicações corporativas.",
        relevancia: "Java continua sendo a espinha dorsal de muitas aplicações corporativas. A certificação na versão mais recente (SE 17+) assegura a proficiência em recursos modernos."
    }
];

/* utilitários */
const formatarMoeda = (valor) => {
    if (valor === 0 || valor === '0') return "Gratuito (em promoção) / Varia";
    if (typeof valor !== 'number') return valor;
    // Usando uma taxa de câmbio aproximada 1 USD = 5 BRL para o display
    const usd = valor.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const brl = (valor * 5).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return `${usd} (aprox. ${brl})`;
};

const obterValorOrdemNivel = (nivel) => {
    if (!nivel) return 99;
    switch (nivel.toLowerCase()) {
        case 'iniciante': return 1;
        case 'intermediário':
        case 'intermediario': return 2;
        case 'avançado':
        case 'avancado': return 3;
        default: return 99;
    }
};

/* carrossel */
function renderizarCartoesCert(dados = certificacoes) {
    const recipiente = document.getElementById('certifications-carousel');
    if (!recipiente) return;

    // O carrossel sempre mostra todas as certificações ordenadas por nível.
    const certificacoesOrdenadas = [...dados].sort((a,b) => obterValorOrdemNivel(a.nivel) - obterValorOrdemNivel(b.nivel));
    recipiente.innerHTML = certificacoesOrdenadas.map(cert => {
        const classeDistintivo =
            cert.nivel && cert.nivel.toLowerCase().includes('iniciante') ? 'badge-iniciante' :
            cert.nivel && cert.nivel.toLowerCase().includes('inter') ? 'badge-intermediario' : 'badge-avancado';

        return `
            <div class="carousel-card" role="article" aria-label="${cert.nome}">
                <div>
                    <span class="badge ${classeDistintivo}">${cert.nivel}</span>
                    <h3 class="card-title">${cert.nome}</h3>
                    <p class="text-sm mb-3 text-gray-300">Instituição: <strong>${cert.instituicao}</strong> • Área: <strong>${cert.area}</strong></p>

                    <div class="space-y-2 text-sm">
                        <div class="card-detail-item"><span class="text-label">Público-alvo:</span><span class="text-value">${cert.publico}</span></div>
                        <div class="card-detail-item"><span class="text-label">Custo Médio:</span><span class="text-value">${formatarMoeda(cert.custo_usd)}</span></div>
                        <div class="card-detail-item"><span class="text-label">Validade:</span><span class="text-value">${cert.validade}</span></div>
                    </div>
                </div>

                <div class="mt-4 pt-4 border-t border-gray-700">
                    <p class="font-semibold text-secondary mb-2">Relevância:</p>
                    <p class="text-xs text-gray-300">${cert.relevancia}</p>
                </div>
            </div>
        `;
    }).join('');
}

/* carrossel */
function rolarCarrossel(direcao) {
    const carrossel = document.getElementById('certifications-carousel');
    if (!carrossel) return;
    const item = carrossel.querySelector('.carousel-card');
    if (!item) return;
    const espaco = 24; // deve combinar com CSS
    const larguraItem = item.getBoundingClientRect().width;
    carrossel.scrollBy({ left: direcao * (larguraItem + espaco), behavior: 'smooth' });
}

/* filtro */
function configurarFiltrosDropdown() {
    const instituicoesLista = [...new Set(certificacoes.map(c => c.instituicao))].sort();
    const filtroInstituicao = document.getElementById('instituicao-filter');
    filtroInstituicao.innerHTML = '<option value="">Todas as Instituições</option>' +
        instituicoesLista.map(inst => `<option value="${inst}">${inst}</option>`).join('');

    const niveisLista = [...new Set(certificacoes.map(c => c.nivel))];
    const filtroNivel = document.getElementById('nivel-filter');
    filtroNivel.innerHTML = '<option value="">Todos os Níveis</option>' +
        niveisLista.map(niv => `<option value="${niv}">${niv}</option>`).join('');
}

/* checkbox */
function renderizarCaixasSelecao(dados = certificacoes) {
    const recipiente = document.getElementById('selection-checkboxes');
    if (!recipiente) return;

    // preserva check atual
    const idsExistentesChecados = Array.from(document.querySelectorAll('#selection-checkboxes input[type="checkbox"]:checked')).map(cb => parseInt(cb.value));

    recipiente.innerHTML = dados.map(cert => {
        const estaChecado = idsExistentesChecados.includes(cert.id) ? 'checked' : '';
        const classeDesativada = (idsExistentesChecados.length >= 10 && !estaChecado) ? 'opacity-50 cursor-not-allowed' : '';
        const estaDesativado = (idsExistentesChecados.length >= 10 && !estaChecado) ? 'disabled' : '';

        return `
            <label for="cert-${cert.id}" class="flex items-center space-x-2 p-2 bg-white rounded-lg shadow-sm cursor-pointer transition hover:shadow-md ${classeDesativada}">
                <input type="checkbox" id="cert-${cert.id}" value="${cert.id}" onchange="limitarSelecao()" ${estaChecado} ${estaDesativado}>
                <span class="text-sm font-medium">${cert.nome} <span class="text-xs text-gray-500">(${cert.instituicao})</span></span>
            </label>
        `;
    }).join('');
}


/* filtro */
function aplicarFiltros() {
    const instituicaoFiltro = document.getElementById('instituicao-filter').value;
    const nivelFiltro = document.getElementById('nivel-filter').value;

    let dadosFiltrados = certificacoes;

    if (instituicaoFiltro) {
        dadosFiltrados = dadosFiltrados.filter(cert => cert.instituicao === instituicaoFiltro);
    }
    if (nivelFiltro) {
        dadosFiltrados = dadosFiltrados.filter(cert => cert.nivel === nivelFiltro);
    }

    renderizarCaixasSelecao(dadosFiltrados);
    limitarSelecao(); // Revalida o estado de seleção e desativa/ativa conforme o limite
}


/* tabela */
function gerarTabelaComparacao() {
    const recipiente = document.getElementById('comparative-table-container');
    const caixasSelecao = Array.from(document.querySelectorAll('#selection-checkboxes input[type="checkbox"]:checked'));
    const idsSelecionados = caixasSelecao.map(cb => parseInt(cb.value));

    if (idsSelecionados.length === 0) {
        recipiente.innerHTML = '<p class="placeholder-text p-6 text-center text-gray-500">Selecione pelo menos uma certificação para comparação.</p>';
        return;
    }

    const certificacoesSelecionadas = certificacoes.filter(cert => idsSelecionados.includes(cert.id));
    const camposTabela = [
        { key: 'nome', label: 'Nome da Certificação' },
        { key: 'instituicao', label: 'Instituição Emissora' },
        { key: 'area', label: 'Área de Foco' },
        { key: 'nivel', label: 'Nível de Dificuldade' },
        { key: 'online_presencial', label: 'Formato Principal' },
        { key: 'idiomas', label: 'Idiomas Disponíveis' },
        { key: 'publico', label: 'Público-Alvo' },
        { key: 'custo_usd', label: 'Custo Médio (USD/BRL)' },
        { key: 'requisitos', label: 'Requisitos Prévios' }
    ];

    let htmlTabela = `<div class="table-scroll"><table class="comparative-table"><thead><tr><th>Característica</th>`;
    htmlTabela += certificacoesSelecionadas.map(c => `<th>${c.instituicao} — ${c.nome}</th>`).join('');
    htmlTabela += `</tr></thead><tbody>`;

    camposTabela.forEach(campo => {
        htmlTabela += `<tr><td style="font-weight:700; background:#E5E7EB; color:#111827;">${campo.label}</td>`;
        certificacoesSelecionadas.forEach(cert => {
            let valor = cert[campo.key] ?? '';
            if (campo.key === 'custo_usd') valor = formatarMoeda(cert.custo_usd);
            htmlTabela += `<td>${valor}</td>`;
        });
        htmlTabela += `</tr>`;
    });

    htmlTabela += `</tbody></table></div>`;
    recipiente.innerHTML = htmlTabela;
}