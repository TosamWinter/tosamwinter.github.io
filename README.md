# Tosam Winter — Personal Portfolio

A responsive, build-free personal website for GitHub Pages. Includes supplied project images, credited research figures, expandable project notes, accessible navigation and reduced-motion support. No installation, API keys, analytics, external fonts or backend required.

## Preview
Open `index.html` in your browser. Keep all files together.

## Publish on GitHub Pages — no terminal needed
1. Sign in to GitHub and create a **public** repository named `YOUR-USERNAME.github.io`, replacing `YOUR-USERNAME` with your exact GitHub username. This name gives you a personal site at `https://YOUR-USERNAME.github.io/`.
2. Extract this ZIP. Upload the **contents** of the extracted folder to the repository, not the ZIP or the containing folder. `index.html`, `styles.css`, `script.js`, `config.js` and `favicon.svg` must be at the repository root. Include `.nojekyll` if your file picker shows it; if omitted, these plain files still work with the default Pages processing.
3. Commit the uploaded files to `main`.
4. Go to **Settings → Pages → Build and deployment**.
5. Under **Source**, choose **Deploy from a branch**.
6. Choose **main**, choose **/(root)** and click **Save**.
7. Wait for deployment. GitHub says publication can take up to 10 minutes. The Pages settings screen will show the live link.

If you already use `YOUR-USERNAME.github.io`, use a different repository name such as `portfolio`. The site will be at `https://YOUR-USERNAME.github.io/portfolio/`. All asset references are relative, so both arrangements work.

## Updating your site
Edit a file on GitHub, then commit to `main`. Pages will redeploy. Refresh your browser after deployment. If the site returns 404, check that `index.html` is at the selected publishing root and that the deployment succeeded in the Actions tab.

## Files
- `index.html`: all portfolio text, structure and hero illustration
- `styles.css`: responsive layouts and appearance
- `config.js`: public contact details
- `script.js`: contact link rendering and footer year
- `favicon.svg`: tab icon
- `.nojekyll`: disables unnecessary Jekyll processing

No contact form is included: email opens the visitor's email application. GitHub Pages does not run a server-side email handler.

## Official deployment documentation
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

The website is prepared for you to deploy; it has not been published to a GitHub account.

## Coursework checklist
- Personal headshot, concise bio, skills and research interests are included.
- LinkedIn and the supplied CV satisfy the requirement for at least two professional links. Add your GitHub URL in config.js if desired.
- The breast cancer project links to the published paper and credits the reproduced figures.
- Drone and rover images include context and credits. Confirm the original source/licence of the supplied rover product photo before submission; its original photographer is not identified in the supplied file.
- The downloadable CV is the supplied v2 PDF, unchanged, including its contact details.
- Review the course's separate AI guidance and make any required declaration.
- Submit your deployed website URL on Canvas. Keep it online for three weeks after submission and do not modify it after the submission deadline.
- Add the final live URL to your CV when available.

## Content and assets
Text follows the supplied CV v2. Research figures are extracted from the supplied published paper (Figures 4.12 and 4.10). Reported model results describe the paper's evaluation, not clinical validation. All assets and the CV use relative paths for GitHub Pages. The website remains ready for your GitHub deployment; it has not been published.

## CV access after deployment
The CV icons open `assets/Tosam_Jesse_Winter_CV.pdf` in a new tab. This is a website-relative URL, not a desktop path. Upload the complete `assets` folder alongside index.html. GitHub Pages will then serve the PDF to visitors from your website. Opening the site locally shows a local file path because you are previewing it on your computer; deployment changes that to the website URL. Browser PDF settings may cause a download instead of an inline preview.
