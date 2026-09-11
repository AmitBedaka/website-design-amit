# Amit Kumar Bedaka — Personal Website

A responsive, dependency-free personal academic and robotics portfolio website. It is a static HTML/CSS/JavaScript site, designed to deploy directly through GitHub Pages.

## Edit the content

Open `index.html` in a text editor. The page is organized into clearly labeled sections: Home, About, Research, Projects, Publications, Experience, CV, and Contact.

Before publishing, replace any remaining visible placeholder:

- The LinkedIn profile URL in Contact (the prior site names LinkedIn but does not expose the profile URL).
- The stylized project-media panels with approved photos, diagrams, videos, or case studies.
- The earlier-experience placeholder with confirmed roles and dates.

The profile photo currently loads from the existing public Wix site so the new site can be previewed immediately. For an independent final site, replace its `src` in `index.html` with a local file such as `assets/amit-bedaka.jpg` that you own and wish to publish.

To add a CV, create an `assets` folder and put the PDF at `assets/Amit-Kumar-Bedaka-CV.pdf`. Both CV buttons already point there.

## Preview locally

Open `index.html` in a modern web browser. No build step or package installation is required.

## Deploy on GitHub Pages

1. Create a new GitHub repository (for example, `personal-website`) and upload these files to its default branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, then choose the default branch and the `/ (root)` folder. Save.
4. Wait for GitHub to publish the site. The Pages settings screen will show its temporary `github.io` address.

## Connect `akbedaka.com`

This repository includes a `CNAME` file containing `akbedaka.com`. Keep it at the repository root.

1. In **Settings → Pages**, enter `akbedaka.com` under **Custom domain** and save.
2. At the DNS provider for `akbedaka.com`, create these records:
   - For the root domain (`@`), create four `A` records pointing to GitHub Pages: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`.
   - For `www`, create a `CNAME` record pointing to `<your-github-username>.github.io`.
3. After DNS has propagated, enable **Enforce HTTPS** in GitHub Pages.

GitHub's current documentation is the source of truth if its Pages interface or DNS requirements change: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site

## Deploy on GitLab Pages

This project also includes `.gitlab-ci.yml`, so no build tooling is required.

1. Create a blank project on GitLab.com and upload this project’s files, including `.gitlab-ci.yml`.
2. GitLab automatically runs the Pages pipeline when changes reach the default branch.
3. When it succeeds, find the temporary `gitlab.io` address under **Deploy → Pages** in the GitLab project.
4. In the same Pages area, add `akbedaka.com` as a custom domain and follow GitLab’s DNS verification steps at your domain provider. Enable the provided TLS certificate once verification finishes.

GitLab’s current instructions: https://docs.gitlab.com/user/project/pages/

## Files

- `index.html` — page content and semantic structure.
- `styles.css` — visual design and responsive layout.
- `script.js` — mobile navigation, year, and subtle reveal effects.
- `CNAME` — tells GitHub Pages to serve the custom domain.
