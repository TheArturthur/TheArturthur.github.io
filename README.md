# GPortfolio

<p align="center">
  <a href="https://github.com/GPortfolio/GPortfolio">
    <img src="https://raw.githubusercontent.com/GPortfolio/GPortfolio/master/src/assets/project/logo.png" alt="GPortfolio">
  </a>
</p>
<p align="center">
  <a href="https://github.com/GPortfolio/GPortfolio" rel="nofollow"><img src="https://img.shields.io/github/package-json/v/GPortfolio/GPortfolio.svg" alt="Version"></a>
  <a href="https://github.com/GPortfolio/GPortfolio/actions/workflows/pr.yml" rel="nofollow"><img src="https://github.com/GPortfolio/GPortfolio/actions/workflows/pr.yml/badge.svg" alt="Build"></a>
  <a href="https://codecov.io/github/GPortfolio/GPortfolio?branch=master"><img src="https://img.shields.io/codecov/c/github/GPortfolio/GPortfolio/dev.svg" alt="Coverage Status"></a>
  <a href="https://lgtm.com/projects/g/GPortfolio/GPortfolio/alerts/" rel="nofollow"><img src="https://img.shields.io/lgtm/alerts/g/GPortfolio/GPortfolio.svg?logo=lgtm&logoWidth=18" alt="Total alerts"></a>
  <a href="https://github.com/GPortfolio/GPortfolio" rel="nofollow"><img src="https://img.shields.io/github/license/GPortfolio/GPortfolio.svg" alt="License"></a>
</p>

## Introducing

Automatic portfolio creation based on Github profile.

[Previous Version v3](https://github.com/GPortfolio/GPortfolio/tree/v3.4.1)

**Example - Default theme**: [Github](https://github.com/Alexeykhr/alexeykhr.github.io) / [Website](https://alexeykhr.github.io)

## How to install

- Fork this repository
- Rename the repository to **\<username>.github.io** (Settings -> Repository name)
- Change Github page to `gh-pages` branch (Settings -> Pages -> Source)
- Fill the [`config.ts`](#config) file with your data
- [Generate new access token](https://github.com/settings/tokens/new), add this value to the repository settings as `ACCESS_TOKEN` (Settings -> Secret)
- Submit your changes to Github and open the site (**\<username>.github.io**)

Done, now using Github Actions your page will always be up-to-date.

## Config

`TODO`

### Templates

<table>
  <tr>
    <td>
      <a href="https://github.com/GPortfolio/GPortfolio/tree/master/src/assets/templates/default" title="Default template">
        <img src="https://raw.githubusercontent.com/GPortfolio/GPortfolio/master/src/assets/templates/default.png" width="250" alt="Default template">
      </a>
    </td>
  </tr>
</table>

## How to contribute

Please make sure to read the [Contributing Guide](https://github.com/GPortfolio/GPortfolio/blob/master/.github/CONTRIBUTING.md) before making a pull request.

## Changelog

Detailed changes for each release are documented in the [CHANGELOG.md](https://github.com/GPortfolio/GPortfolio/blob/master/CHANGELOG.md).

## License

[MIT](https://opensource.org/licenses/MIT)
