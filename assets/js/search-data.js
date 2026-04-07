// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications, preprints, and research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-newsletter",
          title: "Newsletter",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-do-neural-networks-have-closed-form-solutions",
        
          title: 'Do Neural Networks Have Closed-Form Solutions? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@yehyafarhat_3213/do-neural-networks-have-closed-form-solutions-8052ae0e505c?source=rss-98562e4d73b8------2", "_blank");
          
        },
      },{id: "post-how-to-build-your-own-custom-optimizer-in-pytorch-step-by-step",
        
          title: 'How to Build Your Own Custom Optimizer in PyTorch (Step-by-Step) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@yehyafarhat_3213/how-to-build-your-own-custom-optimizer-in-pytorch-step-by-step-58fbe987cfae?source=rss-98562e4d73b8------2", "_blank");
          
        },
      },{id: "post-the-most-fundamental-unsolved-problem-in-all-of-science-and-philosophy",
        
          title: 'The Most Fundamental Unsolved Problem in All of Science and Philosophy <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@yehyafarhat_3213/the-most-fundamental-unsolved-problem-in-all-of-science-and-philosophy-4f3fca8949df?source=rss-98562e4d73b8------2", "_blank");
          
        },
      },{id: "post-what-are-the-machines-learning",
        
          title: "What Are the Machines Learning?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/MLmodels/";
          
        },
      },{id: "news-excited-to-announce-that-our-paper-learning-to-specialize-joint-gating-expert-training-for-adaptive-moes-in-decentralized-settings-has-been-accepted-at-neurips2025",
          title: 'Excited to announce that our paper Learning to Specialize: Joint Gating-Expert Training for...',
          description: "",
          section: "News",},{id: "news-check-out-our-new-preprint-twist-rigging-the-lottery-in-transformers-with-independent-subnetwork-training-we-propose-a-novel-distributed-training-algorithm-that-trains-subnetworks-in-parallel-to-uncover-high-performing-sparse-models-that-need-no-fine-tuning",
          title: 'Check out our new preprint TwIST: Rigging the Lottery in Transformers with Independent...',
          description: "",
          section: "News",},{id: "news-announcement-i-ll-be-attending-neurips-2025-in-san-diego-from-december-2-8-lets-connect",
          title: '📢 Announcement: I’ll be attending NeurIPS 2025 in San Diego from December 2–8....',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%69%72%73%74%6E%61%6D%65%6C%61%73%74%6E%61%6D%65@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=UQ3MCJIAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yehya-farhat", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@yehyafarhat_3213", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yehya-farhat", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/yehyafarhat", "_blank");
        },
      },];
