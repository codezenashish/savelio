import type { CategoryId } from "@/data/sidebar";

export interface CardItem {
  id: string;
  title: string;
  url: string;
  href: string;
  image?: string;
  imageHeight?: number;
  category: Exclude<CategoryId, "all">;
  description: string;
  tags?: string[];
  favicon?: string;
  ogImage?: string;
}

export const SHOWCASE_CARDS: CardItem[] = [
  {
    "id": "uisfx",
    "title": "UI SFX",
    "url": "uisfx.com",
    "href": "https://uisfx.com",
    "image": "/shots/screencapture-uisfx-2026-09-30-23_09_03.png",
    "imageHeight": 8045,
    "category": "components",
    "description": "Sound effects crafted for modern user interfaces and micro-interactions.",
    "tags": [
      "audio",
      "micro-interactions",
      "react"
    ]
  },
  {
    "id": "unavatar",
    "title": "Unavatar",
    "url": "unavatar.io",
    "href": "https://unavatar.io",
    "image": "/shots/screencapture-unavatar-io-2026-10-01-09_51_35.png",
    "imageHeight": 11256,
    "category": "utilities",
    "description": "Get user avatars from social networks, domains, or gravatar in a single query.",
    "tags": [
      "avatars",
      "api",
      "utilities"
    ]
  },
  {
    "id": "whatsapp",
    "title": "WhatsApp",
    "url": "web.whatsapp.com",
    "href": "https://web.whatsapp.com/",
    "category": "utilities",
    "description": "Stay connected with messaging, calls, and group chats directly from your browser.",
    "tags": [
      "messaging",
      "communication",
      "social"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACwElEQVR4nFxTTUtUURh+zse982EzTZKa4cdEQZCBE26iRc1AC9to0GzcaQVt/QfmLyhBiFYJUa0k21WbinJl0bSIIJEuKqUklV8z9/Oc3nNvo9KBw7n3nPc8z/M+73kl/hvFJzfLimHYs/RVBlbM+wxC6VrD0jVE0aQzMuMcjGfNj9KD0cKvvD3BlR7XSiPkyX42IhgNBALQFM0Vu5uv+5O1sZk/ewBFumy12K98gRKjy6BpRbTQaSQTDqEIQGv4hGaD1fL1sGJAYh6vYE+Yy9wwRWEcnPOB1gaQd4FMsA+gtYIPXdrK2hOxgsLT0WKG2d9sYjTsXhigt6UVtypDOHOoh4IV3q99weO3L7Du70CJRFFacUjFKiI7MnCHaVYyDEaOtCy05QooHmnHh/l32FhdQflsGb9zIT4vL4ELAYsyTxEhD9WmDAUrkTIImkSGwHWxJjcx/XIWBZLf1ZC4fGkYjdAHt604TjbJGB+WlmJx7sbhCBqMMdR368hmM9AqwJXBIeKzsfDpY2xqTIQknsiL0rBEBBfQNGeWtNAq0uiWOVSrgziV7cXD2ix2A48UUC39KAZyZVIlSeVySEExYklVc3Ya/s8tXL8xhpwWuPdoGsvuJlhGIZfPwfW2YwXmMhHWxOFrAyc0x/lYHh0cIjkX+87hQmcflpcWcexoG7p6uqFTEmvr65QCi9M0q9D6OY+YnlNs/2m6UYANdwdfvR9IdbUh3dOB46dPorO9A6rh7T1d40GAaFJSKmResuGRDx65NP99EQsri+D/DDMlNs7bqdRebCT5lFOdccx+WR9QEAOJZDaHRUHZIAExXnHOai3b3m1zxgPB+pWxj9jM40iHFBwmq/k3ZWu63rCodBafyuz6lWYzSc10gWjnBNNvqIkcakPH4nqcvOxXnJVMbxGrQ935TEd6brV6/zUOjL8AAAD//7yDH2oAAAAGSURBVAMA74Y2ZWkCWZAAAAAASUVORK5CYII="
  },
  {
    "id": "gmail",
    "title": "Gmail",
    "url": "mail.google.com",
    "href": "https://mail.google.com/mail/u/0/#inbox",
    "category": "utilities",
    "description": "Fast, searchable email service with spam protection and integrated Google Workspace.",
    "tags": [
      "email",
      "workspace",
      "productivity"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACj0lEQVR4nIRTTUhUURQ+95zLc3iMo1kj/dDPQCVkRobiwsgikdaBUOQmKGnTpoKEapGbaJmucyPUwpYhQdomSHARlSSCtkiJkH78mxln3n33nO59aM2i8sCDc8/Pd+/5zvdQQBQ4EwDlP9jCKutEQKFyZ7k0kHERjyT/A/G533WjkHEHQel98gBS1XP2Yv+wdPbWbIDQX5opyd3eViPPMsOwk2btfNiPDrQPrMkiYg+EdkxOdeVcoa0Eke6k2cqVhhyEtWPu4T0cQT1avoeyMhsDBhai9bJ7fAukcFxOt7dsgiTNI2Cjc62tYMJxN0SLLUkZjYU3xQMx8tcXyMsflFAqYMtlYJsDpDHpONntQXyz97WkXkIsOWtsmTiqGlGNfHP1jFKmo51BDFD1QaN0GHD+sxVbBEJNzPF1PwKiHozRMNQXRR/+SQ9P7I0G6o7ptI0E3R5EUxXI2qdFMIWriihPoMhaGyHSoONm0PukFGqU9XlKX+urPboYxevqe2wAhcVfooCC8P7o06E4LnQJ4TyRCqzlkmUuEVHgmFiAZe7af/fjUDpfGxZKu1Qh2i3uAvQIfrd8q60tG7x6PRkVzVkXe0uaUkQ6JcDvfUw9n5rIPbpTVyg1cDlqELN+SGlHgHLS8gIBu7ZmHBqqiYm55aamzprstscurPP5b5czkzM/klz6uKFyPUCUaEq08lr2kvIqS6d9lJPCqakl13y+Qkjoc7DaCFmlHSMIwgw6yYlbA4CRfH6DkAQkuaJCwuz9fakjsr1UNA7BiGW3ALcjICc6Y3ZkKqS72fzH9zQpCRec7OrCbFANOi67+ZxwLgBzsxL+AtPTq/BPUwngTBWsNFu4ES3BHqvsuy1/363sFwAAAP//45ykNQAAAAZJREFUAwCjlkLJMNVOVAAAAABJRU5ErkJggg=="
  },
  {
    "id": "google-docs",
    "title": "Google Docs",
    "url": "docs.google.com",
    "href": "https://docs.google.com/document/u/0/",
    "category": "utilities",
    "description": "Online collaborative document creation and real-time editing.",
    "tags": [
      "docs",
      "editor",
      "collaboration"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACD0lEQVR4nHRSy2oUURA9dXuSdMZkkogoKrhREARdCy5duhT1H5Rk5QMXxhEFyU4j/oRDtm70I1wH/QHRYexxMpl+3Mqpe5v0zITcpu+z6tSpU9VCVx264u980EfJIj77AuvqIfapwrdX4G5cws7uPXn54IsmvYdSYWqITdd2demCxz4BrlQ5zMAJX7yHLrSgt28hQYlXO3fl3TyIs2mxjzOi6PgSaqD0FWPB1ZGFFGOU6QrePv2mr83ZQGYADhiMnl6iM32g4uo1snGTEYr2Krovvut2ZKByDDA9dJoBNyXTyEZwZYFk+A+FS/Fm86tuB67UL6DcfK8ba8v4xagbVQXPWzeDSauWIyhQOa7c5P0/uPijK4PWTHRtcqh0SmiBMkf7hEGEMv/vL8UCNACeljyVlSUNrKchnRoBkuVRk4TsWHjnJvG5AXBRSVLFp/vA9fMNCwPc/w3Z3IOYjQGunmDQRAvQhY+AidSXp4yZFBKexgXwpAdcXovX2WEEPMgjIzYWtJoDGDKfzjLvaZDy5iNTuHouGpA6tvaiuJZeEII9MjyhQZODFVcXXCTONTj6SERDlfwcg7bppPyJXJSQxz1IJ41lyybB09QXK5Sru7NdN2GY8rMY0WjIMgqjWRQdjCGDw6ifOddtrY423GTmEwHYjj+3ZELLZzz/rRXXVsLf1Y2FwCbQDzbA8+BD3yMAAAD//7sxfXoAAAAGSURBVAMAQ+XpZ8yAMqgAAAAASUVORK5CYII="
  },
  {
    "id": "google-sheets",
    "title": "Google Sheets",
    "url": "docs.google.com",
    "href": "https://docs.google.com/spreadsheets/u/0/",
    "category": "utilities",
    "description": "Online collaborative spreadsheets with formulas, charts, and automation.",
    "tags": [
      "spreadsheet",
      "data",
      "sheets"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB7UlEQVR4nJxTu25TQRA9s3ftG4wfwkj5AyTEB1CEHkRDB/4LClpQFGio4UNASAiEaC2+wQ2iCU3EQ3FsJ7Z3dziz917HEkqRrOQ7O545s2deDgdwuOohVvLl7cMSg50u1gtFv88/phcgaJvS1uoIjs9mePp5Kfg4egxfvMJp2GW8SC+BqpyDjGCqriLKryJpgWv+CCHuCz6MTtByXayIFZftdDzHa60rKpv9LH6LviHNPKJ2EQPRrvEioJa1yHoM8M5ngiEFkirM2vWMnmqesvVcBRVUakp8UPDl3nNqog/GL2Ul5uOSr8CSMyc1nkpu6GeR0G8PsHfztvJIr+zr7+WxwDnxG6/EEFa+GCVTl638SXkZ15iHM3tBl2GVWZqLr6ubczQ5bPdp0k0NjVJkgBvtHgorMvXdcoDZfE6/wHfej9Ry3HFOP+29kLvDW7pMa7rKJoAFdJQ939GoUdb8jn9N5NG315lBJk8fsT7XhVDZCtCwNLA1MZG9q2dC8O6JXSJZSE6h7JnHpgZNCpba5P6b3Ns7X5/h+8khaRWFZ2IzNphjnDuBP6EZ46arVaDp6QLjv5Ns+bH4CXRKDpLO/hvlTEOxNYrVmChZ+MJn2iGGAtfLI6zD/iWWqV4kO0Mu02GzTLbOB822XPIQ+w8AAP//sueFIQAAAAZJREFUAwBsM/YXIIq74AAAAABJRU5ErkJggg=="
  },
  {
    "id": "google-contacts",
    "title": "Google Contacts",
    "url": "contacts.google.com",
    "href": "https://contacts.google.com/",
    "category": "utilities",
    "description": "Manage, organize, and backup contacts across your Google devices.",
    "tags": [
      "contacts",
      "google",
      "management"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACEklEQVR4nJxSO2sUURT+zrmzT3FlNUXwmYdgCgWJi6AQCCJ2IgE3NrEQsbCws5b9ATZWFrJ2CUmmSGEtKCJiSBbRxMJgEtZXFRZ1d3azO/de79yZBBdmIeSDuZx77vnO6xuBeNAeffFOi1tLoyC+Z22tnmGuUNlDAm3upFFcOgcn+QYidci65fZv+O0xuIVPuzERuItfdMM70RTYkNt/G/YLbNJTXTERnK4E7o6hmmAOWg87DGyw1x0TO4K9a9xeOQmpX0JkT1uv3/ia1omrrZGRKkrm/b8RYpYYzXh8PoOxM5PW9a4yh807LcQgVoUnC/pC+fXG4MefWx5I6IEj+dzloYEkpbA+/YDe9kzweEb36RSeuovfb1S+/Un4LMIVaIXhvjwuDvVD+ijPzizfx3KhY9922y5qwWlMf6nh5uLnKvnS66BT7xgVfNWu+2vVjfb6r5qfPYC7E5Pnr1taSTOXzBHM/GgCV5IpXFvb/LENwcRsy7ORlEkIMko4taYnyUhjHGcD/nigz6uoC6HVqHCg2AmmItIG0NqOqNEbPL6zeyBjDpJSGaIMmMYVJDF3Jc2voWQ+kxUmhJWWKwHHFFfO6mpYgAmtZBqUyaQScEygaSfszVAUMHziMA8ezZNXx/OF+Q8vwh2QclyXZGA3W1xueKj057Ia7JjCUWu+RO5gTl86dSzZYWzNPqT3PWXcD/4BAAD//8g7ln8AAAAGSURBVAMAbPnOtgr8h/MAAAAASUVORK5CYII="
  },
  {
    "id": "google-photos",
    "title": "Google Photos",
    "url": "photos.google.com",
    "href": "https://photos.google.com/",
    "category": "visuals",
    "description": "Automatic photo backup, smart search, and album organization in the cloud.",
    "tags": [
      "photos",
      "cloud",
      "gallery"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABvklEQVR4nJySvU8bQRDF35zv7JBTAklklCoxilJj/oCEOyq6JGU6U9DTQoOR6GnoER0d9BQ2FSAKyyAkGjBIICMkwHyY4z72hjkfkhFnZMGT5m60u++3s7ujoYvYtod51Mq9NK+hixSCsnJVLRj5tfAmQLsUFPyR38VXA+j9AJDOSpKKIH9eBPA6psMtoxJum8x7n0pc+2q1AOZPiR+gnu8gzcg/B+jRR61jgYkKSAlPoygsEFlcz9k8JQDvHEyG7KLWEgCuvMux74tZStQlUsKM8hg2Rx++AXc9Yvahqeti8gi6nkMmI+dMA4YB0vU2BMij35Txz1VK99q0Ml9O3BE6aGLz8m8GvdMEyg/VgOsAOLkH6i5w5gEXPtBUrXsd0p+bR0ur1oGzu2xqfejT+2UkW234GDz3Y3MEccN4bUahkQAc3m8X05qJj6kvaIZXuOPsxK1C6UaqaARts2hxY5IOE31w4O4MH7m7OPb2UPf3Mfafyophi3HNUa0lVWLMVKbk1fD4jE/lsVP1lDPohDfSN7Fmx6ksPwsd1KETaeURhMvgFN2UBPxbKgpkMUqbYQOvB8SQgkAGFCsbXfQAAAD//wP0IR4AAAAGSURBVAMAJRimWkBYZS8AAAAASUVORK5CYII="
  },
  {
    "id": "leonardo-ai",
    "title": "Leonardo AI - Image Generator",
    "url": "leonardo.ai",
    "href": "https://leonardo.ai/",
    "category": "ai-tools",
    "description": "Create production-quality visual assets with high-speed AI generative image models.",
    "tags": [
      "ai",
      "image-generation",
      "creative"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACC0lEQVR4nFRSS6uxYRT9XM5xOocil8ilXApTI8xkYCAjJWOmiJ9gYCgmBjI18AeUW6KISESGLjEgt8gll/Ct871f73Ge0X72Xs/ae6390P68HAqFQgQ6nU4ikczn8+fzSSaJQ3tFoyyTySKRCAI+n+/z+Xq93mazeX1DJSMCnc/nxWLxYrFYrVZsNjubzapUqtc+FJL+4+PD7/cfj8f39/dgMIhMKBRar9cCgSAcDiP/qwM4mEymxWI5HA5utxuZ+/3ucrkul4vZbOZyueQgdHJ6Doej0WiWy6XT6XQ4HAwGI5lMgh5JPJhMJgSMSpqjVCrP57NQKEylUkA/Hg8Ecrl8v9+jRMJ+RBsMhre3t263m8lkgKZSqVDcarUQGI3GXy6hzOPx7HZ7u91GuVarMf6dRqOBaqfTsdlssA6w7z2gEUCw/Hq9ptNpq9UKH5Gh0WhwWa/XoyFihUJRrVah4XtxeA3Lc7kcOKRS6Wg0YrFYiIfDIbzu9/uVSuV2u51OJyyRjg7b7RbEEKdWqxOJxHQ6xXhfX18QPZvNvF4vMjAdkv5rgPexWOzz8xM0kFGv18vlcqlUajabkIFW6BOPx8ELdhrhFzh2u53JZBKJRBgA6GKxSKfTPR4P2oKuUCgQe6C8/jytVhsIBLAmOANi/FmwRKNReE0Afv4S+QYBzIFRuA4Gg/F4/FrC+QsAAP//xkpiKQAAAAZJREFUAwDe2x1Onz1/ngAAAABJRU5ErkJggg=="
  },
  {
    "id": "imagineart-image",
    "title": "ImagineArt - Image Studio",
    "url": "imagine.art",
    "href": "https://www.imagine.art/dashboard/image",
    "category": "ai-tools",
    "description": "AI image generation studio with multiple art styles, aspect ratios, and upscale features.",
    "tags": [
      "ai",
      "generative-art",
      "studio"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADRklEQVR4nBxTTWwVVRT+zv2ZmTfvVZRSbPpei4Um1jZiQyiKIUijJAaEaOLCGDca2Zi4ccWuW3cuNcafGCW6MC7UGn9Y0E2NGMAiFmkXtKWvFimUl/c/c+cezvRO7kwyud+53/ed7xjI2lc4Omij6H1NdEpBFzXJowyMNmR1AKMCNjpEoEPWSjdkf+/Ynf1x8YMqjRSOVWwQ/KC1nWBZipQADDQZMsbCqryARWBCJtKwUigOSpRxesmE5rTeHY9/pCg87pkdyG7fTflbW4YnUgIy+c3yrxSXCF5xvdnMtA8qaZL0GSA45Zk8BKgYxFBMMEhST3vLj22z2di8Q8KNXzp6Ek+ND9JSdUndWF3zy8u3TxuGLRIRSLwQvCwFKI2028LU4ROIjMZn334KFRhyjjE6NISJ/UNEA4y7tl7Su8ID0xDFJJq1sqyUoXarhbEnDuHQweMoP1pGrXYXy2s30eq0sfvhfVyKeiiOCXFvqHRf+PQ0sckLcNL11GkleHJiEkeeewWpAzwD4yNj6LQb+HtxHpev/0VLKyu8fmuTdsUPOenCOxxFFi5zGNzTh5MvT6FcGcXWZorG/QQWGjvjCL3FECsrC7gw9wuqt6vsxbW9QwOZGRwewPWFqhwDXCotDDT6+gWm8oR4NGsZ7gmrTBD1dgvOpzCGYI3B2n/r0Odnv5keKPfSjkd6ePGfdfp5Zg61rS1MPjsKa61IIDRabfz26znM/j6DpkhRiqRgKr5nnvLw5HexB25c2+D33vyCrlz+Fy+emMTb776O/9cTfPXxJ1hcuIRSqSh9ElcEQySZk+yoWzdr7BL5IZRH9/fTa28dlshGmD1/Edfmr2J1dR5Xr/yJsBCJqV2kWULOd/PNsmFenfqw8fhYf/HAMxU+8vwIuYzzGMBYQ9+d+0mykUBbIyanwtRB5WlhYUHbHtVpODj7pXf2ja5vuh09VhViqHarIXlI4bMWQImYlqtMoUiyTeImZ15yazy7z/Vw+MIfVHDHSnGh4n2Hkm5H5GRSPyUlX0VZLpXywQC7nEU+b8pxcjHrpmf0RnqhHqmDMwrpTkVuj4CsHJQuJ9KAVBx20ofU545DZlAK3ZdJ/BpJ/cxCc27jAQAAAP//fK+jaAAAAAZJREFUAwDsJ4VXpDJt0gAAAABJRU5ErkJggg=="
  },
  {
    "id": "imagineart-video",
    "title": "ImagineArt - Video Studio",
    "url": "imagine.art",
    "href": "https://www.imagine.art/dashboard/video",
    "category": "ai-tools",
    "description": "Generate and animate cinematic AI video sequences from text prompts and stills.",
    "tags": [
      "ai",
      "video-generation",
      "creative"
    ]
  },
  {
    "id": "ideogram",
    "title": "Ideogram",
    "url": "ideogram.ai",
    "href": "https://ideogram.ai/t/explore",
    "category": "ai-tools",
    "description": "State-of-the-art AI image generator specializing in reliable typography and graphic styling.",
    "tags": [
      "ai",
      "typography",
      "image-generation"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACoElEQVR4nHRTO0tjURD+zs0txBdJkG1EUERFBREtBSuttBMFC0HBRmMlFuLeQsyuteBaqIhi4x+wERGtfCFWNr5CSJHHwiYhCXknZ2cm94Is7MDcc8858/i+mTkGSLTWFmmUtEJaZa1UKrpcLuuvQmdVkopta7Gvsn/8qAk785kyDEMO4vE4np+f0drait7eXvwjFhv/oR83AyFlL8U3fr8f9/f3eH19FedQKKQHBwdxfHyM5ubmqqpJgh08NhKDICKTySAcDqOvrw8DAwMoFArY3d3F29ubamhoUEtLSyB0Lhup16SPQwUulwtXV1d6fX1dNTU14fT0FIlEAmNjY1hZWUFnZ6fe2tpSw8PDWFtbU1QPiSK8yVBfX18jnU4rzsrCaE5OTrC6uiooYrEY9vf39fLyMs7OztTIyIg2KYoUjAmdn5+DaTCSuro63N7egu6xsLCA0dFRBAIBRqG8Xi9KpZIgZwQ6GAxib28PpmnCpoRisYjZ2VkpZjKZhM/nw/T0NLq6uiTJ+/u72Bv2HIgDQ+fIrLxnZGzs8XhgWRYODg7w+fkJt9uNi4sLRg2mgI6ODmxubgrXrxQWFxeRzWallZeXl5ibm0M0GoXjw4lNyqLtlujJyUkunMrn80Kju7tbisjzMD4+jqOjI1AXdHt7O/r7+8XHcDgTLDU1NaVo1Ts7O2I8MTGBoaEhPDw8SJCenh69sbGhIpGIYqRSRellrZYCLZfLqVQqhbu7Ozw+PuLw8BA3NzcgR6HR1tamt7e3MTMzI/YmOccZAAch7kZjYyNYX15e8PHxwVAxPz+P+vp6zQF5rFtaWnjcq0Q/wam/0+bH/x4Td+bp6UnGmqdTjCizfW8p5znT4iP95jwmHjBnvB1x6JL+pu0vWn/+BQAA//9eZilGAAAABklEQVQDAC61ruirT3S1AAAAAElFTkSuQmCC"
  },
  {
    "id": "suno",
    "title": "Suno - AI Music",
    "url": "suno.com",
    "href": "https://suno.com/create",
    "category": "ai-tools",
    "description": "Generate full musical compositions with realistic vocals and instruments from text.",
    "tags": [
      "ai",
      "music",
      "audio-generation"
    ]
  },
  {
    "id": "pictory-ai",
    "title": "Pictory AI - Video Editing",
    "url": "app.pictory.ai",
    "href": "https://app.pictory.ai/v2/home",
    "category": "ai-tools",
    "description": "Automatically create short, branded video snippets from long-form content using AI.",
    "tags": [
      "ai",
      "video-editing",
      "automation"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADVklEQVR4nGxTXWhcRRQ+Z+7c3bvZ/65N1k1ak9TUNDTiblP1SfyhwZ+HRiq2CPokakDRgiAWU9YKAZ8EC6KCWEUKWiil1ActIj5Y0FYfDP60u4lJalaTjVnuzd6fvT9znEnsQ2kHZhiG833nnO87w+Em6/WSNZzKG48Igj0I4CPgr0mDn3/lZ/xlM4LkM5K64fXQWvzEE9uPeab+vNXA7EaYfGXyMP2WzQR+hJSbqtbRuobYICDJ+CjUY4cODnyu+dr+hVkCEWKIMgnJPJwhzq1dYjoaWMwMnhdm10S1Aa6qglWBZAKkxx7YfiRsafvrM9ChAFVyTfJqkp9HAthAfgy700MdgyX2JfLw0mYLCivX4T5zS6mY+sO3WYG0CEJykFNSxjBVHiAKcCITunhGaKAxIcT8/G/Luz+EksMUQU8KhwMbCjIe151VNNdXZNkMhYhQMYiQYRBa0PZaTCjpEPtu25UeVFi2qYHWkQ2S5xLdPtIDe1+wYE3USJJIMKDR3abCwz9C384UBB2FJ+F6XvA/AWEjbNQAxGJMAG65uyFe/qwC3y6+AwmOYMj9/d/vw2unnoR0eTYyNkwML/9F7QV1Y0qM4/Uhi0EwreuI7p85un/4AO3aOg52YAuPTNENZXx2/DniK/1KXdR49NaJ+QFPYbG6l4o7hoLxp0/GPj02Ery5NcaPZooAV5cAmu4VCsiDYuJO3FYCsJcBVvzg8NTvsXenR9xn5iz/LH7zoD3ZirreO1cLx7fFaSWd4j9ZDmE8Jj2QQiqbIil7xxfYZWhRw3UqGhnlsYL2SYpZTyFNzOyou8Nv19rhHetRmP/HTfZyFgrT5yCImBJdQ2WmMp1h0ehYKQ6rg2m6WM5dfpXhmdHZ00vByUUb7KaX7N2Z8UMCRglNzWHUJoraSa6gKArxEFqBnl32aO5Sk47jqbuW1CTytM6PZOPGPfcWnHMXm2ZTTWCCCyH1WpRCLXTxMEjryINI+JVc50ohbuwzfW1iw8YqYDh56+qBQ/1fjp5d+PeLkpEtVvL2B2seanFGP+gMv1vrcH00Y34MEPNqZvTGwf6v9ow5F47e8BtnHmr37L6lcx/UC2emnehFLXC+9lB3uY6Tvc6Fqccr5VLudPaqhAXXMP8BAAD//yW/qbIAAAAGSURBVAMA+KqEOSG1WNcAAAAASUVORK5CYII="
  },
  {
    "id": "captions-ai",
    "title": "Captions",
    "url": "desktop.captions.ai",
    "href": "https://desktop.captions.ai/projects",
    "category": "ai-tools",
    "description": "Studio-grade video recording, automated dynamic captioning, and AI voice enhancements.",
    "tags": [
      "ai",
      "captions",
      "video-production"
    ]
  },
  {
    "id": "replit",
    "title": "Replit",
    "url": "replit.com",
    "href": "https://replit.com/",
    "category": "build",
    "description": "Collaborative cloud development environment supporting 50+ programming languages.",
    "tags": [
      "ide",
      "cloud",
      "coding"
    ],
    "ogImage": "https://replit.com/public/images/opengraph_rebrand.jpg"
  },
  {
    "id": "vscode-web",
    "title": "VS Code Web",
    "url": "vscode.dev",
    "href": "https://vscode.dev/",
    "category": "build",
    "description": "Zero-install Visual Studio Code running entirely in your browser with local file access.",
    "tags": [
      "editor",
      "vscode",
      "browser-ide"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB1ElEQVR4nIxTz0sbQRT+Zpq1UGjZ/qLQ0wba0N4iPRaKHnso1P4DbQ+ejReRCO5Gbyom4h8g3oW9eBGFDR4FXRXEo3tQUBEU9WBMdp5vZxOzq0Iy7McO773vez9mRqLbVfTyhr1+nlu+XrDcc6tlFl2Rx9f+IkQFtYaZ+/FdmwioImwMZzqSi2tDaFAlZlH0tVYfZMaTelv2rSfJo6s2VFiBUmgDSZgS5X0boucA07sTKfLIig0KHZ0ygtL/KjExCYHZvQPeNisQAcRtPw6PbUj8SwkKlDD10/m0dElJc0YTlOGxuqWFlPS5NxP1G/bKKOsFBA1g+ldVj0Glu5QY7g1wW2cRCnSZECbefwBevARqdZ50vRczMTkeZBrxKZwE3KMBvGNiz/M48NUbxlsT1EhlfFxBwbVA0gNCCydHwPVVPDANlde+Sf93W4FSkFDC42BLG55hG2enWYRqri3CPiFcTO7YrQqSyHDAItvZSXOY/1No5img5PPwYCcyOxjb6rvvX7QOR4e7JioDF3i4HN/h6LbITQjray4V0vktOJsFkCjrrDUW+PL5wRA7Cnzjq0z/9X3Qt7HZQvSYQP3dvcZoFTfyhjDcj9lsIIhKweDramS+AwAA///CfrpiAAAABklEQVQDACiz5ep3KqA5AAAAAElFTkSuQmCC",
    "ogImage": "https://vscode.dev/static/stable/social.png"
  },
  {
    "id": "stackblitz",
    "title": "StackBlitz",
    "url": "stackblitz.com",
    "href": "https://stackblitz.com/",
    "category": "build",
    "description": "Instant fullstack WebContainer-powered dev environments that run in your browser.",
    "tags": [
      "webcontainers",
      "node",
      "browser-ide"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACDklEQVR4nFxTv2sUURD+5u3eXZQsHglCjDaCoGAXAzbWFjYiitrZ+AcIFhaCnZA0NpZiY6dBxDa1hYWxE9JoIySCPzg8Te4u+95kZt6+/ZHHLbf73nzffPPNvHy47h+4zD2G5wWACbLIfroYzIAjQmA74LhPjIz+BB+e0sKa/0uZK+QjOIJDayk4E6qJZ/SzilqWkAVJ6tiHsZIXHALLv+OI4Qhm5LIzmjJWlghnh4RJaWcxNmIKA6lkqqTro+BM5IwmjNVl4NEVYGfM6LlgYSlWsbXkduZMQvYPGKcKwptbDl9+ArtCMMipE6vLJcPqzALWmuf7wNvbhKV54OXnqOjfLCZoY/LGMDa3p15rB17dIFxaJnz8ziiEbFXeB2Lk9m9g5mOskSyu+1qOV3tZwQ7XL+h3fErZPN4nvNhiPNyUjrjkBJC3e6ZUz66SgfdmqoREOtCX2t9vR3BGDbijIAjBQE7PL0LKiGqeXyNcPkPY/Mq4uxHV9TKyWDqqQGvS2j7tCkEJnJO5VA+2dhj33jFKAc8J2LfAhqvbZwNC5r5mv79C0jrg5ms299vgNqaeg9SaaRn7f/EkcGcj4Md/xrFeN3NzV6o5qEbYSA+C49NCsPYBVs6JAZmilDnFpgnO5WucLpPO+Jy48m3E4gcwFHAZGtNT5s5lkul+IlS/OhmYrCNRNjedrs4tVjCKPQQAAP//2cHV8QAAAAZJREFUAwCB0R0UinpdVgAAAABJRU5ErkJggg==",
    "ogImage": "https://stackblitz.com/_astro/social_general.jpg"
  },
  {
    "id": "bolt-new",
    "title": "Bolt.new",
    "url": "bolt.new",
    "href": "https://bolt.new/",
    "category": "build",
    "description": "Prompt-to-fullstack app development platform in the browser with live preview and deployment.",
    "tags": [
      "ai-coding",
      "fullstack",
      "browser-ide"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5ElEQVR4nGxTPWsCQRCdvVxEm4ASQZMmWKSL+FUJoraxSq1FwNLext5OFKzTWpk0EgJBiKAoWFrlB0iKaIylGL3LzDgna+LAO+9m5828fesasIsw4hmxQFgabIGeW0jtDREVIoF4QZxLM1vyx0Jf+0TcnuDjQRT8IAwpsN1uN3g8HmUYBmw2G1tISppQ7RnikghJkWY6BaZpqn6/r6bTKZRKJSa6XC6F4Sg4FU7SlE4sjwowVCgUglgsBjR9OBzy4nq91hWAqPUaWoLk8v4SiQRgM5jNZpDL5aDT6UCz2YRAIMB1FM5QUzeIptNLPB7nhN/vh0qlsi/wer1QKBQOzDQ0V5VlWfxC8ilGoxHk83kYDAZkJGQyGSBznUGsGv6Ez+eDcDjM79VqFVqtFvR6PfZDfDgI05GDBTYqUJFIhKXiFEilUhAMBqFYLHKD8XgMq9UKHLMPPKAC2kI0Gt1/l8vl/aTlcsmKjingTtvtln+z2SybXKvVmJROp2E+n0O9XofJZHIwnU8EHzPaOnVDg4xGo2G3223V7Xb/TdPIlqS+6eMJcYdYo+xT8kG60zb4ZIhIqrS1Dez+jY+UuEa8IS6kq+0Qj4R+mT4QabpMX4hXxBXsbqSbTsBRrRH3fsrAe8T7LwAAAP//yXsSlwAAAAZJREFUAwCzjL+nemXswgAAAABJRU5ErkJggg==",
    "ogImage": "https://bolt.new/static/social_preview_index.jpg"
  },
  {
    "id": "v0-dev",
    "title": "v0 by Vercel",
    "url": "v0.dev",
    "href": "https://v0.dev/",
    "category": "build",
    "description": "Generative UI system by Vercel creating production-ready React and Tailwind components.",
    "tags": [
      "vercel",
      "generative-ui",
      "react"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACKElEQVR4nGxTPYtaURA977kfooWghSI2NhY2+hPUP2BpnxgSG0uxEISgGBFEsEggpZ2VVoKt2FjZWLghCKJCEEXxA0Hfu5m5e92Y3R04vHHuzJlz5446yIQQnwlPBINgKry2a5xzxoQPXKuRk6TvTzybyTGF90wo6Or3Jyb4TY6fYBDurolkGhk7EuTLGB/qun6hj4Xwi6Nn/sFJ3Pk2UQXeynhmZ9eQ2a8O/ysyTROj0Uh+GV6vV7jdbu1axo55Op20w+EgXC6XPLhcLjgej3h8fMR0OkUkEgHlwGazYb/fo1QqiVQqpRmGIXRWs9lsOEmLxWKy+3g8RigUQqFQQDwex2AwwGKxQCKRwHa7RTab1VarFc9C01mWx+NBo9FAr9dDMpnEw8MDdrsdSJXs6PP5UC6XUa1WkclkcH9/L5VxsztikZLD4TC63S5YBXdzOBzyjiw7nU6jXq+j1WohGo2iUqm8zEhnFovFgvP5LA+bzSY6nQ5msxmCwSAmk4kszuVyskm/35fXY2I5cB6iWhxBJBrLq9VqKBaLGA6HaLfbyOfzshtfx+/380yE3W6XNZpaT009naCZaHyt9XoNp9MpC5fLJebzOQ8NVqtVBAKB6zuLqwLg3/q+kLBEHjJf8Z1dkYvAO/1HxY3rNlIxk0CtrSSR/ya1TGrt2aZM8FV1txArnwpFIp+JoXxJTDDJtaiab/wK38n5Qni6VYm3dhvj3I9U++MvAAAA//9RSXIdAAAABklEQVQDAKijXVyIS4d7AAAAAElFTkSuQmCC",
    "ogImage": "https://v0.dev/assets/og.png"
  },
  {
    "id": "lovable",
    "title": "Lovable",
    "url": "lovable.dev",
    "href": "https://lovable.dev/",
    "category": "build",
    "description": "AI fullstack web app builder that generates clean code and connects to Supabase.",
    "tags": [
      "ai-builder",
      "fullstack",
      "supabase"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACt0lEQVR4nHyTPYsmRRSFz71V/TE9b8/OzLoMisFkJoJfsGOgiWC4kRgIIrogZv4GjfwDgrJGaiSuiYkgiBgIDoaKgYlGs4HDzui8M/N2d1UdTw+7y7Is21DV1cW9p54693YkYAaQe9tPYnO8jo3VVfQ5l44/e8Zn9gmO8IjH5okvPf8Cm8ObtnF7F/0K6AuwmKXxO4yv2Uf48+5BDwo4r751GWH9plW+q+CRhqyozMwRrT2tvK/4tlYPSb4QKH3zJupLu6QnIlYwd4W6EiPPmRDxLHbw6gXpB/P+gwRh8ylUW8VsnVYanR00FDeJOEvKrJSEZ/g6AvZR8c617z4R1U6AJUPZNuYzXWICghAERBYiSGhw2tclKz5fkNznR5yqx8RFJd+6sMDHArobuTKrknNS8Ip76Q1/J5zaOVbct+9Xf90jmJrH2bJFzofzwSxZHgwNPJ2QYYjzoQZeC9mvIVfAuLbKe/3nvv/b+6IY43F1BTUWKEUJSR7mRnZuSPDI3M6EOUIVISfJT630usbrK+8NLz4X8MsX78ajsF1iyPRyjsYaq6xHKJct8EgWLIU0yMYZLerVIMdezmzmMW5dP3jl4y/jQbMooxsaPoHOO7RhC3XaYeCxeV7Kn1EUBcUqFahWcdY1+jSErWZl9cvxVuzSicHWq20urEUXN9BkXSufMojKiqrCgkSXG5GDtWXwbhrCmtgqxAMPsgypD31a80bbC1srl6xSYuCgTlMzcCaYpWKeLE6DxbPBq9OJ/ms89LiswX//U2VbBtRsQ83OKyb5UFSBohqTklE/hSHBlnJF/1n84e+y+DEeu58E8Lb8byNCrAtc3xaMrh6UrGlizrRUDGMuwgJ+Kqn+8MYNm+LS8Edw+1aF6CLRa91KoDKThs2dq74yTIIYSfyTnfsHDN9896nNQvgfAAD//5J+D6IAAAAGSURBVAMAWIprwT4Tkj8AAAAASUVORK5CYII=",
    "ogImage": "https://lovable.dev/og-image.png"
  },
  {
    "id": "react",
    "title": "React",
    "url": "react.dev",
    "href": "https://react.dev/",
    "category": "ui-libraries",
    "description": "The modern library for web and native user interfaces with concurrent rendering and hooks.",
    "tags": [
      "react",
      "javascript",
      "framework"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACwElEQVR4nHRTS0hUYRQ+5783fDD4SIRCW80DibBwVTYzYdgikiCmmREfFW0CtcAo2raohRRSYG6qlSUzc3FTWZCB5IyPdhVRODNuQktpUeYTZ+49fXdqSCPv5v6cc77zne88dPrnCydSB02mEp77FjdC9Wu2LRibKJKqSp8m9DPqdU9tjuet4PRVFjokLPMktEeE+khHkEldpNRnsWS3ME0aXtetPEblH6finzwAHN1R4mgHS0fWUpeVxg/Y4of2O3rY2SnZ9TMANASmZtx/E1wXRSJKt/QaZn47sH/Xiu3QlJwUi4aQdMh+2zajYd8yYt9pGavGxthYnfZCBrPJifQSkdSG46kOFvEK0XE4RogsaFDtzYlUnbAaJ1NqQfsSGItiouV6EI4nm+DsBqBKSGIos8Vk63ShYy21ME9UXlzoQrFDoHqMfxjss8LcG/M6n3NoPH0JOhtFMj1wtilNlZLws4jXORiKT3cKsW74PHeDr5MtmlJNltAi6h5AYddQ5YgiS1qXF1fOxvw148xqFprrbHA4kbxQWLqzr6is4k5oLNVtHPEMAlDHTLORetfEkqyeA1GbggbZMldm+T1fPWuBDuWiBZyhbT7G7LuQ5Bga04M5t4lwmeK8hNR5JaxF/K77zYmZFiRDr/gHK3mUl5BrYnAseUKhiaCtBmUUNbWi+4Hvq+vpgopKKTaX3LSRbyKHQTSHZvcafs+wbo/C8PNwKJFeRbYrJGqByXojrI+WO4pf0RrWgvVG2F5gUguoYoYU3za87lEbq+gj+CS3TA5Evo/6nP0Rn7sVbDcUqS8Y7VcRuWnbsI39dkwu1sYAi23CQmApMpSdRuCB4OgHhy0rm6WnKDUAnQHT4ic5qfDZMXZsbpGA3f6YSFVnrY17ulYgZJkX88eEMU5GNx0T03bnzDjn+j/nPIFzlv+f8y8AAAD//3oqk54AAAAGSURBVAMANhNkLTkMI+wAAAAASUVORK5CYII=",
    "ogImage": "https://react.dev/images/og-home.png"
  },
  {
    "id": "tailwindcss",
    "title": "Tailwind CSS",
    "url": "tailwindcss.com",
    "href": "https://tailwindcss.com/",
    "category": "ui-libraries",
    "description": "A utility-first CSS framework packed with classes that can be composed to build any design.",
    "tags": [
      "css",
      "styling",
      "utility-first"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB80lEQVR4nKRTPWgUURCeebvr7ikBGxHstEghiKIhyYHgqQtqIRZ6sRHsbNWAtskVCloEtbQTu5xNUARhE09B8kMERbAIqGAnlpfk9rK3b/LN5jbJJdckeTDwdt73ffPNvLeG9rjcrtlRMaVzZGqfyOrn+n6U7VYodyPTCAkxS0dehKkC/BYR3kYGoC+Kj3mGhq3QCQAcyH0H6/lcGCyUPopbK1GaiXUItMmDkyuniexnZA5o3U2FluHp5nQYvMuxV96Lzx0WYXtgqlExYr61Wum845l7kBjGaRPhIVrA3ZkJC6/6PzSOOh7fyATK4+JUy2TPfCU3iCn4cpbr646i5kNiedJ2kxdcUkFUvGUUWB3iVKv31Mn3EgDb5OPjsm8m9J/C+lUSngXpP+IfYgG5a9MX/WqmWIziy2jgMbZHEAbgX0zySPtVkZ9DvNK+2v2Kr53nxXxupjjZLIM8gc9exGHEIVgeQO6t2s/J6ijxiOs9mAfmpW1rjotT8YM0kTdzlwp/BqPGbbTyktYeWILw0fVYmthnruv0WbanZi8URvKBqwlzMPZfKFmr6HSRvo58nJF1cEL3Hdf8xeY1izORWa9sXD9n9nRBt1QjB/21+qO4F8m7OD2JMqlh+pFYGpsPg995O0TdXiLt9SlvEtn9z7TDtQoAAP//o7xxJgAAAAZJREFUAwDjROcbnmEMYwAAAABJRU5ErkJggg==",
    "ogImage": "https://tailwindcss.com/opengraph-image.jpg?opengraph-image.0jwfhnd690..4.jpg"
  },
  {
    "id": "vite",
    "title": "Vite",
    "url": "vite.dev",
    "href": "https://vite.dev/",
    "category": "build",
    "description": "Next generation frontend tooling offering lightning-fast cold server start and HMR.",
    "tags": [
      "bundler",
      "esm",
      "build-tool"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACm0lEQVR4nIRTz2sTURD+Zt9mN0nzwxo0tGgFsVIQPBQE/wIPevESEMFDvXlR0IOgB3sQqQdp8ScGxINKoUG8ShGrIhT/AL20BxGLqW0SbWJ2k31vx9lNKy1UOstb9r03880338zaiI0JIJ4a5olEEkOcgKYkLEvJlSMrCfgp4HcSpr4bTj3A3PNHVI7i7BJYVUDm7mG+kk/haiDOShYSQAzgAiYtAH1Asx9Yycq+hme9xCCK3g8P8XE3g/eUgSWZmW1YobXOTYA6LriWgVkqwv3l4/rMJN2SG/GgkB4PctoqYD6ZxRGTglYOlFaIwi2BZyNfnoOwnoOqKnwYeYsTC8NAwYP5/A5sC71X/YSjnSAuV5GWUFtoOnF2kidUBpbdgpduoHRxkTpYxD+jBwd5RtlSsQ2OTxISl8Kok8UBE9WvhIX4NQn6j8Ydv4u6CaR2H8oJsEbYxsrH+FK+H1O+Cy2oKiLlMagrojbloBUKW2EZ1jFrcdxCYDwWhenefh6Uu8sSGTEiyY7AgALZNxh6OQm/OgDzfRc+dYo4bUmRMfUbiAKIVR/Kro2hQCizZA00yDMSLGlWUqAfAzIHBbQN4fxkhbyNZsVAU0W+1qdxqt0RKB8J48HqdMFCm2oOuFpAuLoXVhcYe/GUvqDEIl9Py1BKSLLGmWYbP0V5rTWMdpCXCcw1MmAZIFPbJxK3cfvNBL3EuJQ8TmaLiBFIqwiVCUE5VwDyGG3lMbe0B/RtBHY7gdcfb+IklWROKrE8sLcCCPHlTXuXF9o5+H4WWen+16EGzsWaVTjc8LGwrfU6kyI4xoaSPgaFZZydLtPq+gjzDgA9h4QlNYVI5+q4MD1N89GPF+m12fM/AD2rEtZcD2P3Z+lJxKrSG4st9hcAAP//dqfP7gAAAAZJREFUAwACWBFDwsjv1wAAAABJRU5ErkJggg==",
    "ogImage": "https://vite.dev/og-image.jpg"
  },
  {
    "id": "motion",
    "title": "Motion - Animation Library",
    "url": "motion.dev",
    "href": "https://motion.dev/",
    "category": "motion",
    "description": "A complete animation library for modern web apps with spring physics and gesture control.",
    "tags": [
      "animation",
      "motion",
      "framer-motion"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACFElEQVR4nIRTvW4aQRD+dm/5p0CiS4vSAEV4ACSauE2BEkU8QCynipS4yBME8RIURApJTWfoeAEcBadyR5wilnBs7rjjfjyz3J5OCMkrnXZvvvlmvpmdVaCVzRbeKCU/R1FUF0Jk2Ea7QGoRFsX7jqCl74dfPM/5IYj8mshjwiTjx8iHQdiFvpCCvLVyuexICPksjiyZzI7HFBgbHX0ppZISNVEslhyy5Uxk5scZjopgLKXEVUTIx1GZrbPsdjs+w/hRNgRBAMuyOHBE/yZBXhlpJrNt26hWq0lKpRS22y2KxQLu7x+0RPqPkmBxzRrYbDY4P/+Eq6slBoMBlstfGA6HmM1mmM/nOD19h8VigW63KxzH1oqkkWjbG7RaLfT7faxWf1Cv11GpVHB3tyb7C4xGX4l8CWo6lRYmCrmJXALJdDCZTHBy8hLj8Xf0ej1cXEzRbDZRKOTRaDRwc/NXB+UyKfu+xH12G51OB+12G9PpDLVajVSscHv7j5rn4+zsvSaXy2U4jqP7kigolcohSdJKuCbXdalhRXiep0vzfR/r9ZpUYFwyF7wnJfA1sZWviM9MNoRMJoMwDPV4HA4Za/HIlmFCDKTvWa8wDMEjwb1hJjWGdpKO17EziIG0w9EpZN89B9eWUjZ/On+iz0Jqng/Z6cyxL/Uu+GhRky6FUL9J9XPimybQE8/5B73E9667/fIIAAD//6brvpkAAAAAZJREFUAwDgHCvHBlHaOAAAAABJRU5ErkJggg==",
    "ogImage": "https://images.motion.dev/og/fresh/v1/site/home-3jhn8b0abpu66.png"
  },
  {
    "id": "gsap",
    "title": "GSAP",
    "url": "gsap.com",
    "href": "https://gsap.com/",
    "category": "motion",
    "description": "Industry standard high-performance JavaScript animation engine for web developers.",
    "tags": [
      "animation",
      "gsap",
      "timeline"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC+klEQVR4nExTTYsVRxQ999ZHf7zu129e8gYJgxthMj8gkIVDiA4MmCwUQkggyb8QQRAcV4LMyp3LkE1cSBQiAWF0409wIdkpgzs/3sz4nO7qruutp4IFRTXV99x7zz2nLNJ6eW7s23gJ4PMk4mvLD/3A11989e/z9PvnV3+cnBT15Qb+7NT4bsX4ezXbG7/TzgHh2eaK5/JvGrttWQywIEyrApOWnwbptr5GiTpv9mZVuVEFxsR4nOBK4+IDjf7VWjO6SJXdlsO+12KUkaHsrQzVarnhX/urhdMEVbHBiyF4Y4wn7ZGC1FRtL3B80bLggrQSRcGWiAti8mzAb/o4YveL0Y7Muz5m7LU2c05GHJnYISTMhdSxJSQ4kIGhAbqZchjRM8uI4YmXd5kmTps1WhIGSA3II/HMHGnI2UhmjCggVJOcLfN97eJ+nRfsyYSClv9Ea/VuiaVHhP1zaw5xb/RlsT55AzTsZDataNyZuRy3m6fcCpoyfzzjUZNHkREbGqPCHG//N+i3GGv/7Qe0W3Y+3NLs85xsy4fxTpiH0/9M/3qyW998In04HYfujiNuCTQ/wOJWp+CfaGffJiJTFKjYohDlqHxLY1B4g0+rgkfJ2jTRB+afLaXw/dqMqr0vVqv18VyUgpfZSq0UeI6ON095j9qWj1eVQkQQnRnVmvLgIwXbcHklr/26fzV03nqbfMCHfVfX48bJsONYE3De9Gg7gg4IiAc46gtk6wvQFavanskCRZ2+yYiSfMlMDsd9zMn9mHwgqrm6wYlaCEpDZTQBvd7JmWSMXgFL7jpA1VnPJKfqnTO3aTss56H4NAGhz+bQs4LvloU2qvoqWB1nonY1TP1Ix0q3K3a3Gx2hch+0Qa1KQ8rl4Vj9cNd2bbvrjvw31aTeLlpGobBGjdOH7qmEeK0MEUflu++U80ZHYVk2V8/qO3jQwe5Suvj25W/jEz6/NGV3viHnJ+wfSgzXr5U3l8/5T7l6cgR3WT/PqnCdnvdKhBs/6HN+DwAA//9S7KCTAAAABklEQVQDANCED05g9hHzAAAAAElFTkSuQmCC",
    "ogImage": "https://gsap.com/GSAP-share-image.png"
  },
  {
    "id": "chartjs",
    "title": "Chart.js",
    "url": "chartjs.org",
    "href": "https://www.chartjs.org/",
    "category": "ui-libraries",
    "description": "Simple yet flexible JavaScript charting library with 8 canvas-rendered chart types.",
    "tags": [
      "charts",
      "data-viz",
      "canvas"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACZElEQVR4nIxTS2gTURQ9L51Mpk1q00zFtBCiFgul9rcRutJNN3Uj1pXowm0XiiB0FzErxUUoLgVXfvAD4iJgo9WViIKITaJQqolpzc9OPo1JM5NknncSE63E4IXHe/fce+697/CeCR0sHlfm4yllvlMOawfGYsnDkiRd6Zf7Thp+Vsk/VtXyZZfLGexYIBKJ2C3W3kVJtFzo77N1/xnL5gtlTasupZOFaxMT7uyuAqFQSJRl52lBFD0Djt4D6GBKphhVNdU75HTcYYxpggHaHfsWnE7Zh/8w2WHdD1hvJVJbdnJ9JgPU9dpAPapWgI1UBzpvnXRw2djrBZjZXKmjd5fBffeBV0Fsk7vwbBtL74oNRi0PfL4ErF0kdhqcWasGXL8CbD3AlzQFNxvnFyt4zYt4EB1Hb7SGGVLliPYIfOUb2CbF5z8Co8fQmgACbekM6ppy6rSVxNFPN3F95B5cUhahtadA4D0QHAG+0+S57mbr5maUoqNeAjQFXDRDiu3FuSk/zs4so2vdDP6BxughDco60PVbi4YGJmLrdKVCvIFSAi+KwBs3hPVusLcuSuqiRURVNVSnWXWhNYFJrSgYow5To2DhMKECuIW6RveQNrQETgQilqjJ9DTlTQI7agb49ZA4PaT48PAZsVLzDES+uuH3A4kEuCTVB2I7ZWBoEDg+h/RBd6wqWLyll89vH5qbU3c95XA+73DYbIsWJXe+fzUoIRBoBGZnkZ+cKBdl+43cD9PVsT6WaXLafqYNzselGvfa48kThp8ZdD7RBOZxMbb6d27bAk1LcH4KNbBBgT38V85PAAAA//8cjCpJAAAABklEQVQDAI3O3/cXGQCtAAAAAElFTkSuQmCC",
    "ogImage": "https://www.chartjs.org/img/cover.png"
  },
  {
    "id": "svelte",
    "title": "Svelte",
    "url": "svelte.dev",
    "href": "https://svelte.dev/",
    "category": "ui-libraries",
    "description": "Cybernetically enhanced web apps with compile-time reactivity and minimal boilerplate.",
    "tags": [
      "svelte",
      "compiler",
      "framework"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACuklEQVR4nGxTXUhUURD+5uzd7mpa2g/5EEaSIJll2m4KiparRKZQJkRPFT2EaZHQFvWyEb5IJUYoPgSBEYhRbrGlRbkuRokWimhIgv1ARYWEmnb3507n7h+hHriXc2bON2e+mW8EllkMmGL7yqSdvC/uEB9IzGc4RcRPUT8tAgpp0EP7UnM2fP4GzKFYWizSpCEBw1BwnnrxakkAI6o8MG+Bis2KAzOBi9IbD/sRhnUv49sUoauNMDs9BzP2kAdDEcx/4ELYIHALs7AiPYtx7nqAd5eaY6+NvdFwxq4iMP+UvLzfwIkYuAA75J0e6IoVJy750T7IBpiGvUzHyph6O1nPzFORa2fMso2rN64xcEqsACZxAUFKgvOexiXVKi3MMDXVM7e3EM3JJCf7IOq+6gj4haSm4K8uYjVgZ7ECt2cEW7dn6HdGhBgfZNSWAz9+Eg4fBbJsjKF+4Mn9IFZLsAlueFBhYMMZjK1nGWoBPs2gJPsQZKRbCTcczNlFFOJadRbY1cK4dtrIdpSgs9E1EWpdZ2cQccKLjxMwPWj187Y8obe5yQDTazeL4yWM94O6XlWjIDUNmNeL2BluuWL8jCBgPTuUz5UaooEeppwC4F0/weUipKUyzBYKUTYphk4s0dKFKVSuS8GXX3koOwhY7QJN9UCHC0iWxatzAKeugk0rSDy+reHzBxXx4i059dDDkS6IoLzqgzBZZJpCJK1ldNwF6p3gjFyiP791anX40dWsygJ+lzk3RvVHMV0XUjdWrCxD8wtNz7SpFBYYhOehHzcdZnyahOyAF0HUkhejMXFF9c9FUn0BvERicgIqTjI2bGIMPBPoe2SM1jQS1AY815pCoouIb+kwlSBfEmmUA5QjPWb5+bAK3VDVy9StTSweuOWHSdJCeVIO4E+BYpki1/R4xG+S/iAWrX8AAAD///Q2TLgAAAAGSURBVAMASVIYa2c9po4AAAAASUVORK5CYII=",
    "ogImage": "https://svelte.dev/images/twitter-thumbnail.jpg"
  },
  {
    "id": "jquery",
    "title": "jQuery",
    "url": "jquery.com",
    "href": "https://jquery.com/",
    "category": "ui-libraries",
    "description": "Fast, small, and feature-rich JavaScript library for HTML DOM traversal and manipulation.",
    "tags": [
      "dom",
      "javascript",
      "legacy"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACxElEQVR4nIxTXUiTURh+z/l+NmdzaprKnIJ3FWlQEV2sFCokki6azky6KNJSZ+KNF92siCC7CH9IEhaYmmtOuozob0RFF94EIQWhFzNtMvNnM7fv23fezjc3g1DqhQ/O+d73ed7nPOc9FP4n3G/E7VJ0y7+1Pjm/xbdDXxa2jBwqWgwfSWXI9gSVqS5Nk5K1kLUoqEr6VhQlByWsjMugnJhuSVB87clZy+45s762ytN2SmnFysD5JX2PQFYJgRpOwGB8CpONKt2bR6Ic3EgQjqcBnHI/MCxKF2As8YCzHLV1+K8nSQJVCQi4E/px8i56zCIHdzCAiTSAd1sBItizLvlyVz1Ty3ODDeGitrFTkij7SzqfVjNNeQ+MxAnBSJxowxQEsYKfIyNtECd7RyTZZDGxW8mOXO58/7nJaGitHDQ2AiBkIsEYKmRsoachRDgroqo8D/Y5q5NGcZDN5fWKWflOJbrU+b3HcQ+2CatropjY2n3zhAo5MU3du9BXPw1uNymIlufJCfZSNOXsU6NhP0lgd/C+c5KLRB2Y0+Sz7DDiZe7NT+4mvqUmc50hunSb55wQOCaEAlULeW2eamOU9QtGs4PXOGzt49MAvm/6vSHDUl47GvxBhkhJ6+MTKBmeUSoImqJ2zfbXdnMVlH9M72ZzjduRYg0glukOcw1fuFPeYG/9583JKm4fGxYyshtZPMrZwT3bW3sD/hHW1qGdiiDm6gTEcnU0O0uWX1BD5gFMxIFpiVcasLvz68uvYbBZ/RvMTT7JKDmDSO6QlAosuPJol8GQ4SGi4TRIMrD4L0BN/cRFf0CEGV6l8OsrFQSDHTWFagANcz11X9OPI0myMdb+RkpoM6J2kEhGI5WNPIOcTAFUYhEGOKAurt8MDV9Y25i7P7FJoq+tLu9hCmQP75qJQONIYEaJzHwMP+yKpIac6Nf6GwAA//++DqhiAAAABklEQVQDAIhLKDiXH4GvAAAAAElFTkSuQmCC"
  },
  {
    "id": "react-bits",
    "title": "React Bits - UI Components",
    "url": "reactbits.dev",
    "href": "https://www.reactbits.dev/",
    "category": "component-libraries",
    "description": "Curated collection of lightweight, animated, and customizable React UI components.",
    "tags": [
      "react",
      "ui-components",
      "animations"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACOUlEQVR4nHxTPWuaURR+TCUhSxICISEBv0EsiFYpioMOnUTcHHQ3BXXQza34AxxaBLWpH+Aq4qDYyQ4iulldpOISHMQPcBJq8av33LyWl6TkwPNyec7z3Pecc+89wsswMqQYBgx/BAwEzvhcLBGtTxk+M9w/48WxZ/jGEGH4TcSRyPyd4ePV1ZUknU4jEolAKpVyhMNhEEc50gjaU/EG9GcHLYLBII6Pj3F2dsbNlUoFdrsdJycnPCeEQ/BAKvR1f8hcXl6i1Wohk8kgm81iPB7D7/fzTTQajbgd8qTesM8nhvcHVqvVwmq1cnEoFEIul4NMJsN8Pke9XsdmsxHPb0+fX+QzGAyIxWJwOBwolUq4vb3FaDTihouLCyiVSuh0OjQaDa7r9Xq0yYBaUFxfX6NWqyEajcLn86FarWI4HCIQCPBfqVQqyOVytNtteDwerjWZTJhOp4ojcVPL5RKr1Qo3Nzc4Pz//x1MFiUSCV7Pf78UWfgqPbCe4XC4+db1eD4lEAovFArPZzEWdTge73Q5GoxFOp5NryUNeGuJbGuJkMkG/34fX68VsNuMnEI/Hkc/nsd1ueRtUFbVJWiGKVMGDcMN4qNVqDAYDlMtldLtdpFIpXhFxlBMFeR5ogy6eriePxWIBm82GQqHAK7i7u0OxWOQc5URBnu5hiHS3G7RIJpNYr9e8bzoJt9uNZrPJOcoJ0RA8Lx7TFwY/Xn9MGYYwhMf0P+E7PD2YDwwKgXtk+MHwleGnWPwXAAD//xdACIUAAAAGSURBVAMAB9vPI0RsM/UAAAAASUVORK5CYII=",
    "ogImage": "https://reactbits.dev/og.jpg"
  },
  {
    "id": "nodejs",
    "title": "Node.js",
    "url": "nodejs.org",
    "href": "https://nodejs.org/",
    "category": "backend-database",
    "description": "Open-source, cross-platform JavaScript runtime environment built on V8 engine.",
    "tags": [
      "javascript",
      "runtime",
      "backend"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACqUlEQVR4nGyTO2iUQRDHZ3b3XjEaQkiEqKCdYGmhGIsUmmsEHxBRRJPCLiJWIgh6ESy0CYJgmToJIogptBJFEBGSJgQrJWrMw4uX3ON77GOc3ctFI+7xzfHNtzvzn9/sCGgtAiwRiNbrhcmTwxcni6tnx0/MDzzpP9XyD06ChL8WtpxT58GGg1MDx/IFcQcQizqykCYEUd0RZ3iq06T08tq7uXCyxMlK4LAV6cx4//7OnvxtKfCqyEmIKtoZ49BqoKhuUeYlgqWGQ3q08KX8cLY0W9lSMDRdHGlrU3dVXnbHG5qMJqe1E8YQuJQgTR3oiKzKCpXblQFy7rNJ0uvPhl6/EHuuHOzSDTeWLYjupJpqIoaBwOmaP/Jw2MFGsSJKqzrJZOWBJMH7nFuIzr0dauVbWk3qzqFABYTNcxCsf0Fy/o98bGAjGxva1So6hkFA0buvg6KaE+WlVEghmlsc4DbSSF4NOl8So27UrAAf9BCQWF9bRykRyz80xLFFIRA327qtWT47a8Q4cqiZS6irxApgRx0gbyA1Bn5yEPZA0LNg9/ffAwDDZzAcf8ZQpTRDTN8yRxAZdlQg3vOikJGoH+UoCeEhKFQtlNcQqG3iqC4aiOds4RrizpADBw5I/1R0qTYLM8F6yGSTQ3UVbtwQggFZqNiqLbOLBQG6Bg0ELXuDAexIqMEf8kHBR/OfS+DFjecsisqrzJ+669lbVlT8xZwuZuVeGmoCpmc0/aTRXuL3S4MxsKrrx97Tu+cEFq2SxCHHauRnCNbwHCVfVtlVslU2xpDfLC4sjQ8Mzozt3WVuRbJcsIwHX989AjGajSXzRS7d2cCwySxFMdmoq6Te29G3s//d5hCsFJ4PCDoG+u71NWZG8u1idUkSW4+v/x2Ouzy47w5uX79BgAA///M4EjZAAAABklEQVQDAN21dqOXcxrzAAAAAElFTkSuQmCC",
    "ogImage": "https://nodejs.org/en/next-data/og/announcement/Node.js%20%E2%80%94%20Run%20JavaScript%20Everywhere"
  },
  {
    "id": "expressjs",
    "title": "Express.js",
    "url": "expressjs.com",
    "href": "https://expressjs.com/",
    "category": "backend-database",
    "description": "Fast, unopinionated, minimalist web framework for Node.js servers and REST APIs.",
    "tags": [
      "backend",
      "api",
      "nodejs"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB+klEQVR4nJRSz28SURAG9hkotW4CCezZpiY2JNSk/gniwa6JehKhIgbObK2JXW1iUwxpNQF6Xw6rTWw9FK5SKdcauNT1JNLEWpcDISSEw1J++D1e0zRNL0zyJvO9mffNvJkhg8HANIoQ04hCkMFsNkP3ej1mcxwH3e12LUNhJcDLIA3t9/uwztOwl2fGWQAgJQAAgZLJxGKSomTgRpCqqr8qFRiM+/PWVrlcBqQPdF2/47u7m9+1jY19zefvzc21Wi1CrkgxyTA6qLBYLCaTSbcgUC48kBZejI/b46urrJ43y8s8z79cXFySZf4aH41GHjx8tJFOeb1emq1er/84OIhGIo1Go1arQYuiWCqV8Gl5Sa78rgSCwVDoKaJZGwiy/9N1UbzPEc5koh81DOPG1FSn05mYuHp7dvaV/DqXzYLbPBRit9snJ69nFAW1goMQAq1pP202W7Va/VYoPA+H366svIvHcU875Ha7nU5nLpdzOBwulws6lUrvf99Hdkla8Pv9H96va5q2s5MFF/00Dpge+59MT98UBOHoz1G73VY/qolEAmWsr62B+Pj4b+hZeCOd9ng8Ztb1ZrP5aXPzsHo4c2smGAgAbn/Zng/OW61WBKDawt5e9+TE5/NdPukLIz8/aQqY73SXLBZu6ANkS8V2iYXRm1HX+z8AAAD//5kdqkUAAAAGSURBVAMAZI8sqAlzF/MAAAAASUVORK5CYII=",
    "ogImage": "https://expressjs.com/og/home-en.png"
  },
  {
    "id": "mongodb",
    "title": "MongoDB",
    "url": "mongodb.com",
    "href": "https://www.mongodb.com/",
    "category": "backend-database",
    "description": "Document-oriented NoSQL database designed for high availability and horizontal scaling.",
    "tags": [
      "database",
      "nosql",
      "mongo"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACLklEQVR4nGRTvU9UQRD/7b7VBwoXTLyAJxCNDR+VAYlIjIm9xsbORAsTe1v/B4jl2WppYmMsLNDCI2JiLiYCFsZE4SDEiHDH8XH33i4zO3sfHJPs29nZ3/xmdmaeQadcHL0OYx7A2Rk6DQXrKpQuIE1fYm15sR2umlpu4gzM4SyUekJgMlhgP5W77og+ZHNkcy6PJH6K9a97LYLB6W6g/BanzG1YdnJAlfaxHiFY3gXORgLXtNeTediuO0yiPUBX5rxzmnAEoEaRMgZ4PiKL9ZqVO8Yw1lRn2TXC0Pg1aJ2XyEE4+rMrwN0sMBADhuK8/wfEEs8TKT2JTPadpmwfy5uDHFCkUUr9fr9/iV+s83P4ThjgfchXU21mfHEackj6rXNA9nTLxvrNPrlrCGeh1Q0OfUHCtPUlF8v+qyaL9f64vWchNZfT6BS2J06YNiGLdba5E2huLjaOUbP6rSL6z7BYvu92ZMAHtW5oXgpU5fFmHbjfH7aA4g6wsim24gDwcSvMQsOfCFK7oDA4NoUoWmwSMHEllaK9uSq2e0Xg0zbQG4VnKMFZNxWh/LeE3myO5n+iScL9XqoCI9S6H7TP/Qb6TKsGkWHnPFaXXkhOPcPzcLVpIrns2+NBSkZ4gSLvpXLmtNmZR9llHqK8lghBZaNOJK+h6ucJNOnn3RD4P41tmZxjOqvwfmvzSLseofRlv/Hi43KJfmfHv7Oj39kNh8L8IeICkuQVSiuf2+FHAAAA//+XMtUqAAAABklEQVQDAGNUxxqNnQ0cAAAAAElFTkSuQmCC",
    "ogImage": "https://images.contentstack.io/v3/assets/blt7151619cb9560896/bltfe3bee7877352896/Meta_Generic.png"
  },
  {
    "id": "postgresql",
    "title": "PostgreSQL",
    "url": "postgresql.org",
    "href": "https://www.postgresql.org/",
    "category": "backend-database",
    "description": "Powerful, open-source object-relational database system known for reliability and robustness.",
    "tags": [
      "database",
      "sql",
      "postgres"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9UlEQVR4nJRTixWDMAg8aQdxE9nMuBlu0k2sQGJItPp6fa8in+Mg8Y2MaZo2ZjZbRLCu6xB9ESWutv3N87wBDNl/+tQSrUti6e5hMy2H88uyLIN1ASePZmhX7dLDCxEaCcglnpOvYIVc3xT0q4sSc80OvmNIU0mlLDDA1Evr9oC7fQ/QRYKUhVudOUXQD1AWGRIHKsfxDxh1yRTYDuvq7C2manOoNKYjcAziIyXuV9hQ2d3RK0CVTVxevgOqUABc0gSFzfzK6jI59Goqd0dC3NvtAv2WcihXdS0B4QH9CP2p3RKcj1hOOS884pN4HDHuln59ffQLAAD//8m9ef4AAAAGSURBVAMAAAh48OIqOzQAAAAASUVORK5CYII=",
    "ogImage": "https://www.postgresql.org/media/img/about/press/elephant.png"
  },
  {
    "id": "supabase",
    "title": "Supabase",
    "url": "supabase.com",
    "href": "https://supabase.com/dashboard/account/tokens",
    "category": "backend-database",
    "description": "The open-source Firebase alternative providing Postgres, Auth, Realtime, and Edge Functions.",
    "tags": [
      "postgres",
      "auth",
      "database"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACNUlEQVR4nFRTPW8TQRB9u7e+O/tix0cMxLGFKAMlihQhOgQSooIGUdBTUFGgdPwCREWNaKgRDaKgQ1AAoqBDSGmoItskMXB2Dt8uM/vhXEY67dzuzts3b9+qfr9/T0r5BMBpuBD8USCEMYYneDT866dHVVXtiMFgMKbFNU0hfNQL4dDqYDboUEnDvuRinqCRc2HCMQsNRDKcvCz2Z0if5y5xlG2tiKTQxRHizXWcfXwLSBswWgcmgqC40IQC5Vdcn8RBHy2g1lZw5tFNqG4GoZiFtHtYHUIQvg9bGmg79IpBSM2HN9Dc3EA1ncEQoJmVYFb699yOvhNbo4LsjKfnJXoPrqF99aItFs0YauscRKkRZTF9KfToD4rPu44x1VgAwy3M/2H19hbyO9v2JEiiHkeIr19Ao50iyTtI1nNg/Bc/7z+HKUorstOg0pCrKfK725CtBJrpNSRMJKCSBmFFkCS1KCtMXn6APiR2JC7R8ACSGSwwevoWaqNLgMYuIlaILp+HJBB1agWHr75g+vorZDMhMZ2IKhiFeyo+UW/Ehv81jVEnRffSEHGvg9nHH9h/8R4yje2FcD3vU/4+7CWIViLgTScYqEXC9dpY7I7x69k7UpnmYzpMm5M+CFY1tMIWsT9sHnJj9X0P0zffUB0UVh8ylbvDYPPhcGhqLJZ2rT0gAqOcFK+tmeBMtvLET+qwoa6Lzal4aWUfPj+Isizbo/wKfa3w4uoMjtuzYMbZxs5N6AHv/AcAAP//jrRy0AAAAAZJREFUAwAiED6O67oa8QAAAABJRU5ErkJggg==",
    "ogImage": "https://supabase.com/dashboard/img/supabase-og.png"
  },
  {
    "id": "firebase",
    "title": "Firebase",
    "url": "firebase.google.com",
    "href": "https://firebase.google.com/",
    "category": "backend-database",
    "description": "Google cloud platform offering Firestore, Auth, Cloud Storage, and serverless hosting.",
    "tags": [
      "cloud",
      "auth",
      "nosql"
    ],
    "ogImage": "https://firebase.google.com/images/social.png"
  },
  {
    "id": "vercel",
    "title": "Vercel",
    "url": "vercel.com",
    "href": "https://vercel.com/",
    "category": "backend-database",
    "description": "Cloud platform for static sites and serverless functions with seamless Git CI/CD deployments.",
    "tags": [
      "deployment",
      "serverless",
      "hosting"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABkElEQVR4nJSTQUsCURDH/65LZV4qRPYDSPoNUhQvnhS9J7XiTRDCSxB06BJ06tapOhbkTchDp6KD5/oAXgSFPEWBghBq/9G34q67UAO/ZXfem//smzejwW7rJEvqpEd+FD3ly6o9C/MtvRvklJhkC+72Re7IBemLw78UfE1KZAPeJmt7ZJe8koEIrJFzFWwzXddnjMdj51JUHeVZ4yNDDtzS5fN5lMtleJjEZKQGD2TfuRoKhdBoNGAYBnK5HNrttptIXf4g5bZSLBaRSCQQiURQqVSgaZrbtpR4DadXgqrVKvz+eY1N00Q8HncTMFZkJZNkjMViC184HEatVkMgEFhREIH+skMylUorF4JCoTArqsP6Oh8tqCL6fD6k02l0u110Oh3bTjlOMplEs9nEaDSy3C25BWnPe7IjAsFg0KtgmE6nGA6HmEwm8vlJDkVAGumSHOF/dkWOpczSZu+Yt2f0j8GP5IR8W7MwwLy315WI1zzIMN2qYNswWSIv5I1IcbfJJpEDf5AnckZuJLMV9AsAAP//L5ZfdwAAAAZJREFUAwClAlg2cosU8gAAAABJRU5ErkJggg==",
    "ogImage": "https://lishhsx6kmthaacj.public.blob.vercel-storage.com/og-home-not-x.png"
  },
  {
    "id": "netlify",
    "title": "Netlify",
    "url": "netlify.com",
    "href": "https://www.netlify.com/",
    "category": "backend-database",
    "description": "Modern cloud platform for deploying Jamstack sites, edge functions, and web applications.",
    "tags": [
      "hosting",
      "jamstack",
      "deployment"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABYUlEQVR4nKSTvUoDQRDHZ/c2SISkOAIaLhIIIlho4wsIQbwmYidEbCztbIQ8gfoAlpYWYmERCYkkCNamslCEFJbxjjQnJnIf4+whnHK5D/TfLDu785uZnVkB/5SIO+S9zrFcvepm428AZOs+IO5OyNJszgYbHAODD0gNaLdVJZd9FL3bE0BkJI8RJR2AHKBQsBjCNXB+RLCy/fSyYw/N3TgAm2rtdisH86tvZ6pT8vfF4oCysacCRK9zT6uCMl0ErjDAz+d+Dbf2yq6mPVBmoBjGGmu1hjML2pXLGUP0ZGQZ3OV+GWT7ASUPFn54ZUJeRJOl+qF9Hx5Rwk1lv7RonOfzWmIJQVwi9/tCvI+oA/zQmdgVGAwsUFUB9foQIhR0QaZkmjl6hm3w8BR0/TWzvHSZmStcQIx+z4Guj1xrvOJUNxoSSOIY1alvhUe5Vgsmj7Nsgn/8X/A8uEsYxAR8Cn0BAAD//+VZj+cAAAAGSURBVAMAWQt6VLXkwDYAAAAASUVORK5CYII="
  },
  {
    "id": "netlify-app",
    "title": "codezenashish | Netlify",
    "url": "app.netlify.com",
    "href": "https://app.netlify.com/teams/codezenashish/projects",
    "category": "backend-database",
    "description": "Modern cloud platform for deploying Jamstack sites, edge functions, and web applications.",
    "tags": [
      "hosting",
      "jamstack",
      "deployment"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA10lEQVR4nKSTvQ6CMBSFD6UqamJ8KlkcSEzY2ZwcfBAHJjf2RhMGF3wvFbUEuWKMP20peqab9H4n0J7DoVOSeB0XcxqvBdaIoly15ijhOO7x8WgDlNPH1l72hgHC8PS5yhphUokJPx9SCNE3G6jgBhNmBRtMmDWsMXHotrmLtJp9tFMmCwSMu87iB5jkE8vxp5gsypg+B+2VEVsHSYguz49bq0skvQSrfoUwvEhvMKtOdm3g+y88D2xMFJF+T6LJRNOH7y6oTAxlUreRRAHjWNIoJVa6Ot8AAAD//+NALwEAAAAGSURBVAMAzn9rZyqCm6EAAAAASUVORK5CYII=",
    "ogImage": "https://app.netlify.com/og-image-default-app.png"
  },
  {
    "id": "mongodb-cloud",
    "title": "node-cluster Data | Cloud: MongoDB Cloud",
    "url": "cloud.mongodb.com",
    "href": "https://cloud.mongodb.com/v2/69a4700b13387665800599ae#/explorer/69a4706b361756b865fae654/learning-node/users/find",
    "category": "backend-database",
    "description": "Document-oriented NoSQL database designed for high availability and horizontal scaling.",
    "tags": [
      "database",
      "nosql",
      "mongo"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACLklEQVR4nGRTvU9UQRD/7b7VBwoXTLyAJxCNDR+VAYlIjIm9xsbORAsTe1v/B4jl2WppYmMsLNDCI2JiLiYCFsZE4SDEiHDH8XH33i4zO3sfHJPs29nZ3/xmdmaeQadcHL0OYx7A2Rk6DQXrKpQuIE1fYm15sR2umlpu4gzM4SyUekJgMlhgP5W77og+ZHNkcy6PJH6K9a97LYLB6W6g/BanzG1YdnJAlfaxHiFY3gXORgLXtNeTediuO0yiPUBX5rxzmnAEoEaRMgZ4PiKL9ZqVO8Yw1lRn2TXC0Pg1aJ2XyEE4+rMrwN0sMBADhuK8/wfEEs8TKT2JTPadpmwfy5uDHFCkUUr9fr9/iV+s83P4ThjgfchXU21mfHEackj6rXNA9nTLxvrNPrlrCGeh1Q0OfUHCtPUlF8v+qyaL9f64vWchNZfT6BS2J06YNiGLdba5E2huLjaOUbP6rSL6z7BYvu92ZMAHtW5oXgpU5fFmHbjfH7aA4g6wsim24gDwcSvMQsOfCFK7oDA4NoUoWmwSMHEllaK9uSq2e0Xg0zbQG4VnKMFZNxWh/LeE3myO5n+iScL9XqoCI9S6H7TP/Qb6TKsGkWHnPFaXXkhOPcPzcLVpIrns2+NBSkZ4gSLvpXLmtNmZR9llHqK8lghBZaNOJK+h6ucJNOnn3RD4P41tmZxjOqvwfmvzSLseofRlv/Hi43KJfmfHv7Oj39kNh8L8IeICkuQVSiuf2+FHAAAA//+XMtUqAAAABklEQVQDAGNUxxqNnQ0cAAAAAElFTkSuQmCC"
  },
  {
    "id": "mem-ai",
    "title": "Mem - AI Notes",
    "url": "v2.mem.ai",
    "href": "https://v2.mem.ai/notes",
    "category": "utilities",
    "description": "AI-powered self-organizing workspace that connects notes, ideas, and knowledge.",
    "tags": [
      "notes",
      "ai",
      "productivity"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACu0lEQVR4nIRTX0hTYRQ/3/2uN72tOV1T07bJRLCUlq4imjZdCEbogw/1kA8FhRCE0FM9RFH04EOEQoGxSIzAN0lBMmriEntpzqWQBIP9MTWbOXWb2+7dvu53N3MZ1YHv+875zjm/3znfvYeFXWLkNbWX9h3tNCvKrVqs0gMw4Bc2vZMR3/hA2NXnji66suNRlp7XW2rt6VDVXEHAIEIYAIKBAsi6dKYIJi/WZ2w3vg13SRdb2QB5o4a216f4stMgBROgyelFAKfPDAiRQKeiAUfbQn8LBaEU0Huw/kmrUteOEJEsIqOiDHT2Hd2QpOtyVPoSVlk0Fvkygoy8qtZR2epEBKP/MUPGT9J+cibw1IRvlRy5a+ILjsksaKenNDNkVUN2qpI3gkiKAbZRqbYCSsqlRVJCxL6x/IZFLNek0DZziHAyu1QN9RNCQTDVZNui0FpZHcfmERLBm4h5mz3vGpdiMR8lqOP3m0YMLeMKtGefnLwNIifTtjBoOUU5gyi7tB4sum9vJ1OZjgad3Ssz96hPrlAioTpBYmopufkVQJSiRMIsJMJSUhLm45vzsEt6V+YePlqZ7RaIkEghMWkPe8fOeobM53xDZgoWENd87EQ4aK/Izaus4/NNruj6x10Y5M6y86a07mfsCN2uaWq6KMD7qN8uf8YP1Sec/ng8cPLThDEEEIJ/SDEoiqYOt86qMa+xeIZNjDsacj0PBmz6XE43WHV8qAAg/2/JSoDCl5X1rzQ5OUUDa59t7uh3l/wnjoaCb5uUqoYGZYGlXV164YcorM5thT2SS6B+CnpeY7g4YDAPHspVVk9Glh0dXkcHfcXfhulxRVXPZXWZPEzSqwlLicQiRhgXs/wBTDBOAUP6g17bdf/0H8P0S4w8X3u1RNdpURRatdxeeZwDsbhvfGPV/iwY6KMtZ8f/BAAA//+ijufGAAAABklEQVQDAPaaLb+eH+vBAAAAAElFTkSuQmCC",
    "ogImage": "https://mem.ai/assets/seo/mem-open-graph-card.png"
  },
  {
    "id": "notion",
    "title": "Notion",
    "url": "notion.so",
    "href": "https://www.notion.so/",
    "category": "utilities",
    "description": "Connected workspace for wiki, docs, and project management with collaborative databases.",
    "tags": [
      "workspace",
      "docs",
      "wiki"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACGUlEQVR4nJRTPYgaURCeDauFCvHAVdRCEE2TxoAgKBItrOwvYBMRbeyE2GghglgYG0GxC16hkEqLFFYGwSZaWSSFNlqsoFuo4FpoYWYeumQPL3AfDG/m/XzvezPz+MvlogeAj2jv0Gxob9Eerr4gy7LxeDw+7HY7jdVqFQ0GQ57juCe4gkf71uv1HqfTKaxWK9hut2zEg2yDXq8HnU4HRqOR5u25XK6Fl37GpU9IJHEYrC0Wi9nr9UKhUACz2Qx2ux00Gg08x2KxgEwmAx6PB7LZrIzEjwrBZrOBeDwOkUgEUC5TIEkSoHzFP51OsFwuYTabQTgchsFg8Jv/94ZWq8UOu91u0Gq14HA4mBJSRE+4GREGg0E6IvDPZXa7XcWnXNhsNuZ3Oh3o9/tgMpkgmUwqe97AHRSLRaaAbq7VamzO5XJBo9GAdDqt2qvKAQFjNuIcezNhNBqxavh8Pliv1+wJTqeT/M1dBTeUSiWWk0QiwZJ5D/8lCIVCkEqlYDweQ7lcfj0BoVKpsKq02+0XCf5QY9wDyaey1et1eAmUxNBkMvkZCATgfD6zJFarVZjP58DzPMs8gRRQWbEDVUnkaBEPfcU3fsnn83A4HFQKyIhYFEXY7/cspoo1m00VAf3IX9Fo9P1wOFRJpH6gZqIyCoKgxH6/H2Kx2A/uthFJ3Dh8xw/zAT+JjLGMvbDDuTMafU3p6pOJV3v6CwAA//8JOpp+AAAABklEQVQDAL1kDUo1A0gWAAAAAElFTkSuQmCC"
  },
  {
    "id": "obsidian",
    "title": "Obsidian",
    "url": "obsidian.md",
    "href": "https://obsidian.md/",
    "category": "utilities",
    "description": "Sharp, private, and extensible Markdown knowledge base that lives on your local machine.",
    "tags": [
      "markdown",
      "second-brain",
      "notes"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACoUlEQVR4nHxSTUgVURS+5/7Nm9GnSVm2EFoZ/RC0MyJaGRQESghZhEFQFAS10IWrMUTJaBUtWuSitFKJaBdu2rgoClxJC6OoTYv+FPW9mXvn3tOZpy9er+jAMHOHe77zfd/5OKurOEaev6fGsGX6lpl/Mm7m2X8K/jwinQEnRkrtDYGabmqUh5ZX7WuRwfXMyKUzMXyrB5D1zZOj6V4dqGdSQIex+X/x0Es/yFUW0OFE9V61i9eQwQcxbheSvcibHVUpcR88w48A7FhUkMenx+1gfg8rIDUAVd0qMIeV0u2pNWkYCIHMzQj0XVEoo3KaeRo7dP/m1yLUM1hc3PCCC9FS0BU1kFgkVPGOZnVZy9B75AgoI7atWOtBBWB2FtxMLwqLZm5t3b4MC0obm3nvXUKUmx3NIxkECMTL7swnIG7I+O3B+j5WlFw9QuC3TWqXipESyGELY/6HFMQQWVIIpMwy7Mp9GB7eZN1Lk/OPILQ9O7bKI8y785mHew0hMxxYAZDPaMms1io01nsu+NWJUWyNY/AVrVUTO0KzUAjU/syho6cP0C5vbBka6JZH8N1KqguSOJeNnewb0OdygEoO9kSuR2l5IDWZaYyUXi9nBxFFG7nfT+5zrfjncsKvWZ59am6QNxLD2qp5qHjgmW8OFFkE4CBfMxkHnGvOmaSdO1K6KwjYU/p683PFzHkHw3lzTL7CJhJ7PJ7dpd1fpia2VjJD9LMzivTJUtnmWlFrLW1q32NZHT0dsy/VLPDNWGLfoLySpHYqNZ6U67ec805rczLMQ06NckSjWk26msK/o8zYSkldNB67HTedgZKhpZ2FgVIAXJAPBIOv+seavv8VpGpdiqF0dkA+T6S+Q+HZTWE5VU7MiHd+gVJFUYDZ2ujn9QsAAP//u4MkwwAAAAZJREFUAwCRjEKaiSRYlgAAAABJRU5ErkJggg==",
    "ogImage": "https://obsidian.md/images/banner.png"
  },
  {
    "id": "tldraw",
    "title": "tldraw - Whiteboard",
    "url": "tldraw.com",
    "href": "https://www.tldraw.com/",
    "category": "utilities",
    "description": "Collaborative digital whiteboard with infinite canvas and minimal user interface.",
    "tags": [
      "whiteboard",
      "canvas",
      "collaboration"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABfUlEQVR4nJxTu27CQBAc24d4yakQkkNHQUeLEBXwEYgamlSkzLekQYieComKD3Dh74gLl3EX25fdw+dczkkUcdLAeXd2bmd9FlLKAMATwScUBKfET0uWcAnvhFdBPy+EZ9y3HljgkZARcoJnJB3jObMKNTdggY/ygQtcslS1fzgc0O12sVqtBMVvqo4jNZeFBL48q0Se5xBC4HQ6YbPZqKLBYIDZbIaiKOB5XsXlnLBaVotP46JOp4NWq4Ver2c5qLiOsDN0gvqfTqcIwxDNZhOj0UiJuq5r01ETII/QfsfjcS1nr5ok++SVJAm22y12ux3SNP2W+7MDHmKj0cD5fMZ+v1cxHuB6vUaWZTUbtQ54BmxhPp9jsVioWLvd/r8FJnEXw+EQk8kEQRBguVz+OkSOyHKv7jkTuYs4jhFFES6XC3zfV/5LAWnW6IukL4ajT+n3+7herzdWKWry9F5dRyMgrQJ1svFqTR7vcxY4Et4MO1IXMKzBmZ8z1xw/AQAA//+QA7DuAAAABklEQVQDAOx/keMkP7IaAAAAAElFTkSuQmCC",
    "ogImage": "https://www.tldraw.com/social-og.png"
  },
  {
    "id": "excalidraw",
    "title": "Excalidraw",
    "url": "excalidraw.com",
    "href": "https://excalidraw.com/",
    "category": "utilities",
    "description": "Virtual collaborative whiteboard tool that lets you easily sketch hand-drawn style diagrams.",
    "tags": [
      "diagrams",
      "sketch",
      "whiteboard"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC7klEQVR4nExTW29MURT+1j7Tc6aMaadTnVYQKQkS1yAiPKBFiAQvVHlwiZ9BwoMHT+IJdclEiMuDeBEaL+L+ggfXVokhxunMmGqnc4xzWdbeU2Il+6yZvfe39vq+b28FCeZgJ3M0EEmEof7yxIdNRGHEYcj638SMlxNMj8aSBgeBlY0ixG0b/0LAUEpnSCYzJ0W4VAx4eDhUnbPjNWfSr4NSoPYl99mafr7va9je3qBmzHRoxcopnMnYJABYFsH9XkP/3RH+NORRqRTyyEgQHT7aac2ZE7kxwJ4+JenzeCVUTx5V6dlTxQ/u/6T9hzKYN28yKpUA5866eP1qnFKpBvb9iBIJS8ViUh3xjGIGJ5MWpdMWOfGY+e26PrIXXFSrIe7cLuPtmypWr0ni+IlZ1JJuYNsBtbTENC+WArpNhQWLElytBtK2cJalru4UXjyv4OnjUcQdQqHg4+H9nxgp+7RgYUIOkua5vpe0YN0bU7Rpcwrlsg+dOzps9N/5gbGxELZjIZ/3cSnrIp2OYX13E+mDxSeiyHiFf4oLV6O4bv3DoGcc0EM0wtz5jdh3IIOOaY5xieT0GJGhgrriCu3tNq5cHsbHof/BAVatTqKndyqamhvMXqV0AQWjwV8dvudrAi5g4J2nr4jpZHw8xOatLVi2PIFTJ79hcLBqrNVda5wySkr/paLP168W8E4U11R0BH6EnT2tWLxkMrIXXQy893Cxz0Wx4BuMwWoKP0o++s7k6e2bX1yfF3AYoWdPG7ZsTSP3uWbEFIshFnPf6TyNjgZmn74HcOKKk00x9jxtI+nLgt29bejakDJ8165vxrYdrcKKWJqnb3mfx0ZDJh3CY0gKdYqq4Y1rRXWvv0y9e9t4XVezFIuM0vW3QHj5ooJbN4vYvqM1XLw0YcnhOV1gl6xmZTj6DX3J1WjGTJvqItXt1dm8PKnmeVHU2GiI/paxn+rPmXdLOqY7qd9O0nD6C5oIY5j0rNc/yvQRWbv8BwAA//9BVqZFAAAABklEQVQDAL7nrtfPUULyAAAAAElFTkSuQmCC",
    "ogImage": "https://excalidraw.com/og-image-3.png"
  },
  {
    "id": "readme-so",
    "title": "README Generator",
    "url": "readme.so",
    "href": "https://readme.so/",
    "category": "utilities",
    "description": "Interactive visual editor for generating clean, structured GitHub README files in minutes.",
    "tags": [
      "github",
      "markdown",
      "generator"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAClklEQVR4nIxTOW9TQRCe2X2XY+MrB7FwLiiQgoAmBVAgJGgREnQUiIKKnwDU/AQqCv4CokYEGkoqDqE4MiDCEez4iv3e290Z5lnCcagyzZudN9/stzPfKPhnzAhHtalcbxJE5Ct7r8r5nFc1nSGH0X+gGIDKGvdHur2J2JnAxtUEfL338q7n68d2f1TKyrP8c8SocexzFlKIoGdyXWvdgxfFq88y7JjKxfdPq9X5WkP5XplGCUlIZZBAeRCzFZoKlFJsybLKRYqM6bR3f5x6e+ZeW2UFckGhYmMTmf6QrLU8SGM3pyO6ffysA+PchUKdrpXWqJeOKO0PKMvNMDC+Scw6Rc5Z+VrlK48rXoSuEMEH7ONJ/xjW8kUw7LCuC6gZlXMG0pHjSQFKDTrr0BkLteq8Wj6xosKZHG7BQK3WljAnnVjMFdWd+oZeC4owSlIMBDOZQpwkoENkcASN5jbn83laWF7C7s4OvwlavDG3Al+3G9whw32baGkspwEdMIBwzAI49CGtlXBQDtEBQeVYiWcLRfxMPQyrFazLs3tG5ikXxUl8oINEDoFQcGQhDhWYEGFIHV7386gjH11qOIk8CCygFrBhg8khIcUxuJmAYW8fwvaA7cYK9Fsd+LT7nU+vn8efzQa32i0ArdnXWujKkOMpBqw8lPlJlAmVJKQOwj8DGMpjP45+EXa7ogPNSjTnrCUU+WSYSYH2l3Z3cXXeqNCPXJw6/11zrDApBaPWFmjMxIpIzCQ5yiXGZBgY5zBg/9zmsHrzcg89dYms86RJkkok0mOV+dnBipPFiPppZ/Bw+9aj1xn20AZW799YKq4uzFrDBAGA7wjTbGG0YhDH81H1mr9b7SfPvx0s0/SKylLBUWwq9y8AAAD//9OXygsAAAAGSURBVAMA52JuSDXggioAAAAASUVORK5CYII="
  },
  {
    "id": "dribbble",
    "title": "Dribbble",
    "url": "dribbble.com",
    "href": "https://dribbble.com/",
    "category": "visuals",
    "description": "Global community showcasing work from top digital product designers and illustrators.",
    "tags": [
      "design",
      "inspiration",
      "portfolio"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACmElEQVR4nGyTyU8TURzHv29m2g5dKEtpWEpoWaIoIG4c0OiBevTgxXhTbh7wv5HowcR49eDFm5FITHCpAg2LEpVSpNRaC6XLtNPSzvh+T2ho4y+ZZObNb/38vk9Bg5kvEiOoGjMAm+Kf/qPjKP8zD8WYZbd84ZP+rBb4dEuFS30EE/cq5UPsJ/egZfIwTROOZic83R2QFYU8nyBfesCmA3otgQh22F6aQHB7I4LI2ndUKhX09PeCMYb8QQ75TA79I0PoO91PQa+hlW5SEkWU55VNwwyG336GXtQxPDGGxPYu9hIpjE6eR2tHG3LpLBbffEA6uY/xa5eCjLoFppn5PDYOJi9Hv27i989fuBychCRLIm88GsPGpzWRhJIlYwkoFgu6Az3wDw8AMhuVIEkzVd7ucdu7kR0cpNIo5DQ0Oexwe1qxNB+Cls1h4sYVnLt64Z8v50SwFZjseir+B3YOqneoD8mdBKgbSmpVVbjb3QIgJVPtqujM7nIIyF5f5xQx8GvZPJpbmwU0eurWyrewtf4Dm7wqjXjIKzNJEhuCD34BkUjTYaNl+Cir78OwNdlgsSo4dXEEnk4PNhbXRWIyioo63E7hfNJS8SSn/hGBs4MCrKvFDZnDtdisKGoFoQ2K5QnYXJu3XUCjUcj0go6VhSWMcWDHI5mmITqldea4LjzdXjqdl1DFQ8VqESJZebcMo2pwyt/QFfDB0+WtdaRlNdhUG76EVjDAfWVF5vHGrMTudK7x/89IYUQ59GqBrzKGwJnBOhZ6oYj10CqsnAf5Ugy77Qv/V8pE3NXigtPt4nAZaM3lUllUbpRy/WVyqo/5613SAAURE5qbIBMnGpUqI6/fr7tMdXsnaXN1ksBQd53ZHPE6GrlmfwEAAP//NxCN7wAAAAZJREFUAwBS/DQ6Fp4MtgAAAABJRU5ErkJggg==",
    "ogImage": "https://cdn.dribbble.com/assets/dribbble-ball-icon-e23a48e718b5b7b6899757650ea54e38c3de764ff97fe94f83c0f494f693240e.svg"
  },
  {
    "id": "behance",
    "title": "Behance",
    "url": "behance.net",
    "href": "https://www.behance.net/",
    "category": "visuals",
    "description": "Adobe creative network to showcase and discover creative work in branding and UI.",
    "tags": [
      "showcase",
      "creative",
      "design"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABu0lEQVR4nGySO0gcQRjHfzO72VvzIJIghIAkTQgoFkmMlaRPApfqkiZVCiEQSJcihCiolWAvFr7ATsRCO6uzsNDCB2ghcr5A8YV66p3nzTozu3unnh/Lt8x8/+/1n7/L14AAY9oLbpiIL6951/wqocQlQh+Uj24EFUgRpRlAZZUY5kbZCpWPy0jwLELZL4TKUgeL9lzevDLecTg+Y26TYpEH93l4z8SzF5zmbY7uICWqwLNqJjs4yXF4Qm0N6QWS7TS+5HuzqTuYZmoR6Zt+MrCTFRVVCf70UpfkXx8fm/AfEeR48piaajy7krIDRzvoPhcFWj7x7jVfmugZxw8YbaNzQM/A2H8afpHZR3rhDjZVs7S2w/KK2eRDPb+TOILGelNr94iGF2S2EYmYVqV7OUzMMDxC3Xt+fia9ZHoOTbJ+QKqZ+Q1DnYEJy7ojyRXobuHvN54/ZXqJ1n5Uka4fZM/ZOmDvEBwziCBl1km4vK01XtOazTGb4fLShPUknsPsquXfCZ8uFUTvlY9VoPn2EcLSEV76lBTkRqqSyKqyFvSsgQ0L31ZTZXW4JW2pSgmGadxS6506vWWi7K8AAAD//+wrtv0AAAAGSURBVAMAP1GfhoFWd94AAAAASUVORK5CYII="
  },
  {
    "id": "mobbin",
    "title": "Mobbin",
    "url": "mobbin.com",
    "href": "https://mobbin.com/browse/ios/apps",
    "category": "visuals",
    "description": "Extensive UI & UX library of real-world iOS, Android, and web application screens.",
    "tags": [
      "mobile-ui",
      "ux",
      "flows"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEklEQVR4nKRTO6oCQRCc2bfvE7zgRQ8DwdATiAamhp5E9BaCFzA0F0HESPQGBmaeREFx1R2rpEaGZQN1G4rurZ7uru3ZjUxBi0xBi33gnLNwhPOctdYpF+XxRgX34pB8SQG7oziF/8fzAPgFrlK3QW6AXB9xFTgB38AI/IK1sYr/QM6BRmZACbkyfCfDr8EvOYQKOHGiYk74CA7WgKYUpYGyHQfDJxYNVghawCVT7HeUytO4Jy50A2z5OmzgdMhfaRiHi3Um59opJ1EiDbgj8Jlz9hyouitj4ZeSHlzmMMMRM2CqmDU/fAU+jDWBzQ5AF6gDFamjkj3QA9raU6JGj+W8bbE+YW9W12Oe5IsrKPw33gAAAP//tVOwBwAAAAZJREFUAwBJhmQDLV7k8gAAAABJRU5ErkJggg==",
    "ogImage": "https://mobbin.com/og_image.png?v=4.0"
  },
  {
    "id": "pinterest",
    "title": "Pinterest",
    "url": "in.pinterest.com",
    "href": "https://in.pinterest.com/",
    "category": "visuals",
    "description": "Visual discovery engine for finding ideas like recipes, home, and style inspiration.",
    "tags": [
      "visual",
      "moodboard",
      "discovery"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADTUlEQVR4nFRTTWxUVRT+zr3vvZk3M51pZzpMS2laAiYYiZrGSCqKscZEDWpYSEjUmEYNCyMLF8aNiRApMcaFigtiXPgbFSRBsAuqYg2kRTQhBgwEkFaBOkyhdKadN/Pevfd430gCnM1Nzu893/cdB9YYIGo9wAX0DXqglwhibUSi37qEwzwtwL9EMJ90Y2r85hrCdTuBYmYpUiOanM0uSa9pQiiEraYSLiVFAppNRKx3/YPzr98FLMYxijudRDFdQnpfG3lDV7lpDBaM8ApC9ndTPEf/XWYTVAzBFwXyRY3Dn8pYfOoOVBZF/I2lyIy0wRua5XqTsknkdmyTpYtHqXj6ZyqeOkSlmaPU/uG7UnQVUOHFZtbmLkF6e2uFS+h9wIV7SJFi5HyRH/2SvMEBqu85gHD8t9ayifUPwn/0Iag/z/LswxsZ/1aMQwnT4OY6+RryW11yBxo8b3I73hTJpx+nK49s4urbI1C/Hkd07AiCL74BVyOknt1AlMmg/v1+9intEljSZaw4w1ArdNLnUvkYBV/tx5XNL1Ln13sgV/bi6vphmJlyDBeKfxxkZ/kylHvuY1m9ZjdwzwpF1K8s3qKrkyibocboQSRWrWF/42PwBlZD9JSuk9ZgdfwEKJMm2VskhQiaqM/Sy8ZSDTNXBbRhSvmACgHLRXTqHPTJc5aI5P894ljcbqERyyP2CeGAp12yHM/PcPDpXqRfeA76Wq1FXzg+CR3M2BlNINVB3ro1UKf/Yn3hIjvw4MBMOQLisFXabRF8Pf/yG9K9/3Yk7r2byZp75yqW7V0gpZHb+RZksUDVV7cx6wXjibwTmvCwE0DtSkI8I+EI01QcjB2gjq3v2CRNoruLSmcmrRQFZEcWte3vc/D5bgt9DsooTTAft6R8Gcvfy0FumSU0QXW3MLabZF8PKoNPILVpA8SSIhqjY4gmJpmRiTohEnXoD/I4v+WGlCm3L8N6aM5xTKnyuwm+GxNzzw9bJBIWK22PxjWS2kSHBa4GdauUV6OycIlrTwaIdibbs0Ykk0702V4hyId08/BkQWRE1nHYqHhyXBzXxLXOjdMsx9f1SmXlPd/WR38YDn+cWAtO9XMUaUvYVAhzJAR/tAzTEzef838AAAD//z6JWAAAAAAGSURBVAMA8gZ+BChRWZEAAAAASUVORK5CYII=",
    "ogImage": "https://s.pinimg.com/images/facebook_share_image.png"
  },
  {
    "id": "godly",
    "title": "Godly",
    "url": "godly.website",
    "href": "https://godly.website/",
    "category": "visuals",
    "description": "Astronomically good web design inspiration featuring clean typography and interactions.",
    "tags": [
      "curation",
      "web-design",
      "inspiration"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqklEQVR4nLySMQ7CMAxF7cDAxN1AnAVxBa7AGRg4ATMjAxdBMDDQwnfrVG4VtXEr9UtPSRTny7EdiKgAP1Dq2qU0PMEVbKkWswblSOLYnA/gyOrMiQD7kEyMZByUnTeDaPQFC3DzGKTM3oEmymMQuyIqdH3kfKGviJslDYuNkezjmz24eDIQvcAdnMAZrLxfkPbJNH7AWu6mTGKlnBp0i9jS2EFqNOsgJfUHAAD//93r1I8AAAAGSURBVAMAG1U2XynFirsAAAAASUVORK5CYII="
  },
  {
    "id": "muzli",
    "title": "Muzli",
    "url": "muz.li",
    "href": "https://muz.li/",
    "category": "visuals",
    "description": "Designers secret source for cutting-edge design trends, news, and visual inspiration.",
    "tags": [
      "trends",
      "feed",
      "inspiration"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABSElEQVR4nLSSTSiDcRzHP5t5W2u1tJnydliL0spBacmycpCXOeJIcZCaC8qJKCW1XJzkRu0gBy8RxmkXmjS1UA4sLZHJy2Seef6mWM9SS76X/9v38+/3pkmYhslEajLUHwGVCm3O74Dma81SM9JIZw2BS17j9C1hNVFqYCtEIpEOcFhos9G1wHEYn5vxZu6eqS0n+oJZTzSG7zQ1pP1zHB7hdtmoKMR/weweZQX01ok4J1oVObxLxN4waMWbZ5fVID128f2AF4uRtaACSGrKxXWUmR1MOgadwq3Pp9vOvD8d0FIl0hhaIS4x2sTGCaEI/fUsB4g8KAC5mnIw3kOOrqg0025jelvcN1hZPKBIT4khFaguJi+byU2xz9Uwtk74/rMYZ7idzHUgSUmj6nuWZJ/cAaWMOm6fkBKpfZCV1i3r5vHn6f+H7wMAAP///5EG8wAAAAZJREFUAwAEc2FT4TNwmAAAAABJRU5ErkJggg==",
    "ogImage": "https://muz.li/og.png"
  },
  {
    "id": "awwwards",
    "title": "Awwwards",
    "url": "awwwards.com",
    "href": "https://www.awwwards.com/",
    "category": "visuals",
    "description": "Awards that recognize the talent and effort of the best web designers and developers in the world.",
    "tags": [
      "awards",
      "excellence",
      "showcase"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABcklEQVR4nKSTTysFURjGZ47ZEUXIQomUFOmKQndDKBS+gJWFDV/ETtmg/EnWspA/5RLZKEUWSllhoVi6hWv83rnP3CbZzalf7znPPPPOe94zJ/BSjiAMQ59ohL7vhyYmNA/tJzaju7+a76UcjqyLsAbZxJcmYR3mElorrMIyVJS2AG0wAV9wLn0ehmAE8xYlfzAfg1m4hnypAtiAAmT1pUpCp7RaaJd3AL7NT8ICvrI4QQ7ezIjYSOzQi3lV2KMEg16xZ8daR410ZHsnHkk0c5cVAivSukmcIdbAFf57nZL1z3cyHSj7OIwqwRI8QT9MSds1sx23bSOK2ncd4RE+oRxueNiLvsl8Bp6h3qpBv0VvYt5n24/KYLyyOIEqsOacqrJLNa7BksKdjnAfdqxyp0Z6Ep0SnEnLqZGmH+oPtFNq1vOWwPaixR5k9MULaQ+wANWwrf2/UMU002F7J/WvHCQX/10WtNhTSFw28xUvoJdy/AIAAP//b/yfLgAAAAZJREFUAwDQJZ/nZge38gAAAABJRU5ErkJggg==",
    "ogImage": "https://assets.awwwards.com/assets/images/pages/about-certificates/awwwards.jpg"
  },
  {
    "id": "landing-love",
    "title": "Landing.love",
    "url": "landing.love",
    "href": "https://www.landing.love/categories/os/",
    "category": "visuals",
    "description": "Curated gallery of the best landing page designs on the web with video previews.",
    "tags": [
      "landing-page",
      "marketing",
      "design"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACkklEQVR4nHxTS2hTQRQ9d94nMUmTtNjUiJVWu7KCBQURXLQYcSFYC1YtblyIuHClSxf1B4Loqq5ciSBqVWoEBaVitS5cK7i1YKsgkpaaavLy3lzvvIkfpPXBG5iZe+6ce+65LuOswvAm+jwxc98hNfiNa5ECEQCCWc3HdtVgbqGkE7EuF4e6DuDee45DPmH0Vtu1wb1q57qMDhqAUhb7V4I4h9ZQvgf9erZaOVl+vBbnjrhz/uVy9upAKTHSm+I2/zdmpc8kos5cLsvR/rnT6bJSmvb5u7sTBsxBGAdw80UdRtCREDc7HR/bGIn1dnUlDVZ9R9DgxYBJrpXvYvHKG/1x+xjPX5xi5TogAX499ZRnS9exdOOdNjFk3qgGvIR66MpGQcXEuTL6CvOXpihztI8qo9Pymhwu1GlhbFpAHr5MlxHW6sif2AaDISblSi5CwuGo8gOV88+QO7YD2tECYMxfeBnX7VAGJMJyGKBy5gXyx7fKockAcm3RIgwpuK2tqN58Cx1EsMScpnKigvkRwiukYRlboSRKwPWIVVsS7eNDRDknVoyU1P9LUQFoXYO7cTUKt4fi9xDquM0GDm0tQ6nSBnSMHybVnhTXNKwPhLrWdbg9rSg+OIREXxFGcOu1OAGYqNk9adGq/vXUcXcYKp+EZmmjDuB1CvjhCLwtBYrbaMExRomEWiJtNlfoh6xTA91YM3GQVd5hrzPLxScjnOgtgMTDJsa00WCk99pNse9Rxo8MKRbTkCOkGpqT/V1UuCNMskl4mwvS0ojJVSTGolifjE9pTjiuVvwomPxQ8gotKVgrU9MXSO/p+eNh37HjYcCVAI3nMzXBTq48TOYmsqWJEayPlxkm+u84/zNHy43zTwAAAP//LJhE4AAAAAZJREFUAwBFuUEMMPM0kQAAAABJRU5ErkJggg==",
    "ogImage": "https://www.landing.love/img/social.jpg"
  },
  {
    "id": "css-buttons",
    "title": "CSS Buttons",
    "url": "cssbuttons.io",
    "href": "https://cssbuttons.io/",
    "category": "components",
    "description": "Open-source collection of modern, responsive HTML & CSS buttons created by the community.",
    "tags": [
      "buttons",
      "css",
      "ui"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC50lEQVR4nKRTzWtTWxCfOfcjuUlukpukaZLm8Qo2rwrP9zZv8dRVV0XxA3QhgvhnSBEXQXBVxUUXLlwoKn4UxGrFShV0J+jCClo/Yoj2I8VqWtN83nvuueMxWK34sfHAnDPM78zM75yZUeE3l/IDG/7i/ncYW1Xy+fyqTp0tTz/H6CuGa84OOD4+ntB1vTU4ONhYm0naA6FQKDAwMPD+cxCUi9TVyCMjI1t60tmhRLxrYzKZrJXL5RvpdPpoLreN5/P7DwcD5s5EPBGdm517ItMdk853vzA4MXxiUyqTmcj15SKmGYZwOAKRiAmFYuHKgwcPnf6+/n3xRBzMkAmpdDcIcOvtdmuHZVn3Om/RNd/BQqEQOXP2tF0qljxwUbx68Vo8fTy9p1Vr7bs0ekFM3p4UJNDjLWH7/b6QrvqHiPJMKRaXIrduXjt07vxZS9JSPEEs29XLqpUVfD5doCvXR2lq6hGLxSwWMkxc19uP6AHabY6lmT/Oq4aragvlRUWlIAtqMe/ldInm/14AzyVcWa7Dh3d1SISzuLLUpjelOXAdgQSItmMzIfwaq3rzpDCdIkYXvJ35QG9nl9FuulivNkFwgUE9iowbUHw2J/kz9IRLnHNwpRDVSWUNJikx0MEA028hIJFwBMifkkVSZJn84NOCqOkqMU8Fx+XSDsC5C9hCZDWY4ZnurIgHezzWDMGfqT6Mhi1QmEbRcJR6MznSeYT8wsJ0sgddWxC3XbJbDjVI4Z0ynhq+OCZWtF31Zcfe8O86zYqGoFJZpmajoch+gfKbikhlu+Cf//5C1WBuwDT0peri5Nidy1s7Ac4dH9scjyYnUolM+FNroOxUBVVYWJy/ylR0erqze6URSIovoEOT1xoNp7Z909aN974Mx7WT97fEgtEhwx9Y7/P5mkKIiaSWOTKlvBKJqnZY07QdoFBQSsHmjeH/96y/+8NZmB2txrR22E4dwG9moTxOgSqfNzbszlbW+nwEAAD///hyn9kAAAAGSURBVAMAbuBUGufMWtQAAAAASUVORK5CYII=",
    "ogImage": "https://imagedelivery.net/KMb5EadhEKC1gAE0LkjL1g/cb814b9d-45f8-46f5-3108-91e511990200/public"
  },
  {
    "id": "uiverse",
    "title": "Uiverse - UI Elements",
    "url": "uiverse.io",
    "href": "https://uiverse.io/",
    "category": "components",
    "description": "The largest open-source UI elements library made with HTML, CSS, and Tailwind.",
    "tags": [
      "ui-elements",
      "css",
      "open-source"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACg0lEQVR4nExTu27UUBA99+F4l8TLJhspoBVEQQEFUSAIDxGQUiWiAP4BCkp+AVHwAdBQQUuPoISCQAoKRA0FAaIQJJTEu+zbvpczvmuEpZE9vjNnzpyZa5vN5imt9TPn3IoPjxobgoHmIA9jigB+yvkm/dumVqu94I+rZTJjFFNQAtAvkse+GgPKz3n6y4oMJJFgjolOKQWf546BiskZtNLIXV4AyRlDWUSVTLRJkuR+QM7UyrUHfun0PbW7+wFpuoXFk+tYu/4E3e4ACh3cuPVcxfExv/3jDQsZaQlWcKQ6dfC12gWl7UXYaBYuGyGpnUA9uYTEvsZwcov+FUxWDwoi0qqwsEKp7C/LOjDowZO68HP5ANVejsooRcY2siyHzVKeU0QdcmwQJYhEGjBGky59UrSMnM37mHJDyBwibYpvmUqQANKCGyssIR5sBRwW+qxslCfAH1QJkjM+9jmSrFewC4PwAiDqKgwHPaQHX7CwsIpzS3fRbMxidfEmDnf28Sv9DDdlUEfGvgaBsQrUbUkFyuLTx0eY8HM4M7OMtbmzqLR38PLrU7z/+Q5HFlZg2ttA/zfZsCgCgGo0Gj5smcdo1EZkJzA9OY8qJtAZ7mG3s1NUNLaC6UNHMejuIR20CFAsRTHGsL4u82vrj1V95jJ6/X2IkpqixdrCUB9N6hW2+u37W7zaeCiKhzGGtZU186rXz7w+GCnuFOt7RL6PiKpXmSxCNjiZbqslcisdVh+qXq/7cE+cyvNhMUHisZb7dx8EPyjvOAfhZny4Hl5rJm7KR/AiQlolgnJJeTOiYFreVt4cmB1juSLXxHG8wdzztOO+vCKQG4lyw/638pExTdqdvwAAAP//+756NgAAAAZJREFUAwC1HOTtbVsn/wAAAABJRU5ErkJggg==",
    "ogImage": "https://uiverse.io/static/og.png"
  },
  {
    "id": "design-spells",
    "title": "Design Spells",
    "url": "designspells.com",
    "href": "https://www.designspells.com/",
    "category": "components",
    "description": "A celebration of micro-interactions, delightful animations, and subtle design details.",
    "tags": [
      "micro-interactions",
      "delight",
      "ui"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB8UlEQVR4nIyTO0gcURSGnTuPfbG7WRSRJCYhECRF7EIgki5NAmnSioUPtBILOxFBxMrGwsLGQhAra8HGxlJF7AULSy324WNmnYffGe/qVfAxcDjn3vv///3PmRnV9vzTXi6XV8glvVaPAeoFAd+yrP5KpbKZz+ffso4J67UCAvSJE0T6MpnMdqFQ6GWdmCLqGXKSy+W6yJk4jiNyj+M4G2RPizwpkJLpfYRbD6nFupUkSYyTz9SFp1oQokPYRJmYg9AOUc4SahHZor40BRzzViKURalUGlBKdWH9Gp7dmgfrSXJg4O+Hkc1mP3me9wtCNzHKVrcGictY570oiv42Go0z04GiX7E7Qdz1h12xnbbIzRhS0sJ3BDzTtZCHOZyS4QBsarJMPdI6yW37ibgIXNf992CIHH7TBAHsIzKt+3aEq/dbgh6XLTOjRd2eZaN4zuZgqqbUG9JCGIar1B+p3yHmUNsiimAol9m23ce8ToMg2E2HSBtTgOa1/StittlsrgOUf6CH3Em+JjrBzXDuEke1Wq03fUUo7Ygit/wkioB+Qxoif2AdkGU276mHyB16uBe+7y9Z5kT58r7w+Y5T/wck9s15iTuJM/bzvI2xer2+ZiJa77utWCx24OAP5Q8IXyHIP+GSjyFO4yisVqsHgr0BAAD///4CtNEAAAAGSURBVAMAT2zEKzfy+ksAAAAASUVORK5CYII=",
    "ogImage": "https://www.designspells.com/og-image.png"
  },
  {
    "id": "codrops",
    "title": "Codrops",
    "url": "tympanus.net",
    "href": "https://tympanus.net/codrops/",
    "category": "components",
    "description": "Creative web design blog featuring experimental UI demos, tutorials, and WebGL showcases.",
    "tags": [
      "tutorials",
      "experiments",
      "webgl"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIElEQVR4nKyTvWoCQRDHZzZXBAIJeYGYlGnyAAZSGVG0E1Q8a30Ge8F3sFfUWlFsRdHCxsbSj4dQK9eZvTs5dBYU/MGyszc7s3Oz/3VAIOluc/qo04gQ5bUGGB8Re8PGR/tyL4YXicKmRFOFxifIrGnUBs1I/SpBwt206ags3AJCZ9CI5NhU55NvDWZor1+tl8Av+15MDMapYUrrlrTj5/vZzIvlQcyAiHmHglNgwc28egmqcgK+KUVd/JWc/38vpgIebMsVQFSBhVgoKGZJwNAfwERyTOd70Q7DAnNQYVdrXbx0jmY7eH97OtsSrE4jJLrTFdjVZ2NNivwKelCD+zExj5Ey438og/dgbLCvHAR7uQR8daYCjfBNcbP7wnM+AQAA//9lNvYvAAAABklEQVQDABCWY0QghEVeAAAAAElFTkSuQmCC",
    "ogImage": "https://tympanus.net/codrops/wp-content/themes/codropstheme03/images/share.jpg"
  },
  {
    "id": "uizard",
    "title": "Uizard",
    "url": "app.uizard.io",
    "href": "https://app.uizard.io/prototypes",
    "category": "components",
    "description": "AI-powered UI design and prototyping tool that transforms screenshots into editable designs.",
    "tags": [
      "prototyping",
      "ai-design",
      "wireframes"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACRklEQVR4nJxTv2tUQRD+dvddcqdBT2NQo/FHuE4U0UbsNCAIWgoWEhSDhVpG0EIJWETQdIKl/4QgCFH8UVjZRLvTiJViyBlDPO7u7Y7f7L53Rux8xx47O/PNzPftbIZ1n8zvP4Vadh09OUZzK2Bc4fH8W0bFvEU7f2gmFp+VGCMzsDgDh7XGXRhMY9A6dAIx0V2mTttBC/o8zQfY2LyNJ/AxQl40ZrEtu4lWTqdRqCsL/MkQP8+SBlsyh6X8njnRvGXk+fgEBtxThhiEYGEqLCOSujYmQg1tZaMxyAOsDVBP15+2NKbJrQKvkdYibwl6KyaCE8mUSM/8qsQYjVUMsUyAI+TF3OK0MHZOGuw4V+imzTNP6AGjF4CRs0zS0XwuYoi1bGQYoeCqbY3fAMauEhQik74Euy8z+Xnu80gEicRwFq8qHgSj3SFf5VrhsS1YcLE5LFxSijSr1EpKhs72h0AB2mrvB69rO0G9REPPtIMDj4C917jt9uVBSskobdU6QfglaL0GNuwDdk0WOtA3NgVsOgy0v9DskIKVRE+8kVeNb9yNJLFyAzcEHHoMbD5KwOdUo7aHc/gGeD+lMXoRkm4H3y3FeMcJoyAsZysM4FUtXAQW54DuEifvK/BxFvhwJVW3cUx8xBD77yBFXai0XyPXWiIrbYmdwdH2fw+SOflpno9nDnWXURxJPVL1rI7YkS7dKxX1aYzGEqNYFx/TweWX+FkfYNbjqNqMk2bS2JYfr1h/1TiFgna4j6HmnZlRrA/6v+f8GwAA//+36AiTAAAABklEQVQDAKAOCM5FkjreAAAAAElFTkSuQmCC",
    "ogImage": "https://uizard.io/opengraph-2021-04-26-10-35.png"
  },
  {
    "id": "remix-icon",
    "title": "Remix Icon",
    "url": "remixicon.com",
    "href": "https://remixicon.com/",
    "category": "icons-assets",
    "description": "Open-source neutral-style icon system elaborately crafted for designers and developers.",
    "tags": [
      "icons",
      "svg",
      "open-source"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACYUlEQVR4nJSTv2sUQRTH33v78xLTqBgkRmJsJI12mj/AQhsLtbAQQQtLC4k2ES6FtWkESxHESMBSLG0sxFSa6tRoxORQMXhk937szLznm9u9yKkIzjL7ZndmPvN9P4bgP5vMztbkwGxt8I3996rEEEICL3S8989N443X/GXuaF4cP3s5Ipr3+5x1C+GrJ/dLwF25kR6C+cAawxaiEitqyOBYGPVyXjRngtv5iYubowC7/WzP2ea3pj0c9gEtSIsNGBsdQ45SImEstTnHBEDiIPDLDCfA4qdQx1ZHGVClkjkDydcDSzlL4qxEhZWYgcNMZJd1p5XXS7Pe9UzSZi7JprV0a/LzcqdUYBQZA3KO2PoY4J5JB0kiIA4D6DBjHB2bWHKLtRbNyVV8WAXPeDsAABReh4DLAbY+BDB+UCExIwsRdtlhQtemR+zJyUfylCKIpvPix9qlpF4CbNWN953B5ghf1wKYmBJJPcRqDIxVJeFMHMIMaSSLNj3zW2kI4LzFvhKjSjbfIXKHJCWQSBDDHjvKXCfMwMQWVn8BisoNU6kwJaTIANbfIjpVlGpWIwuYMEVBLiFJ+HhYgRkokVKFh0gJed9AtG2UES2M2giGQdfdWb2CK7oAh12wlQtDEM3fNkqjoblv03bc5oWVpfCm36wBkzKITpcZ7Va7f6oK37EI3G0jrryB77BB9+A5WqgLQR2EqjQGCtEjtIzZL/+t+0o06q7AFOyDl3BBjkBd06UqBmnMNZBbau1ObfytGUWR3gWCB3BezsEyfio1npJEfyeK+Hfz12hDNe2HtH/oMnZ+AgAA///fn1moAAAABklEQVQDAFcbMZ24KPivAAAAAElFTkSuQmCC"
  },
  {
    "id": "font-awesome",
    "title": "Font Awesome",
    "url": "fontawesome.com",
    "href": "https://fontawesome.com/icons",
    "category": "icons-assets",
    "description": "The internet most popular icon set and toolkit with thousands of vector glyphs.",
    "tags": [
      "icons",
      "font",
      "vectors"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlElEQVR4nKSSwQ3CMAxFv0MGoYhBALEHrJAJGCEj0C4CDIIgi7RucnDVQyvVzpOi/ETKiyXboxIv4RK/97K/wrGFAiePGe5ZlohUggG76WKet0ASzvHH2E56h0NTgocFQpJoEjBTVyNIn9C0ZgGBu/nZQQmDblWCzP4a/6caAXrwQ7KtjbmKVUEeEIICawUTqt+WGAEAAP//d0zLuwAAAAZJREFUAwAbZCHgUjEvlwAAAABJRU5ErkJggg==",
    "ogImage": "https://img.fortawesome.com/1ce05b4b/open-graph-icons.png"
  },
  {
    "id": "flaticon",
    "title": "Flaticon",
    "url": "flaticon.com",
    "href": "https://www.flaticon.com/free-icons/favicon",
    "category": "icons-assets",
    "description": "Vast catalog of free vector icons, stickers, and animated graphics in SVG and PNG formats.",
    "tags": [
      "icons",
      "stickers",
      "png"
    ],
    "ogImage": "https://media.flaticon.com/dist/min/img/logo/flaticon-negative.svg"
  },
  {
    "id": "google-fonts",
    "title": "Google Fonts",
    "url": "fonts.google.com",
    "href": "https://fonts.google.com/",
    "category": "fonts-typography",
    "description": "Library of open-source fonts, font pairing suggestions, and web typography APIs.",
    "tags": [
      "typography",
      "webfonts",
      "google"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACxElEQVR4nJxTy0tUYRQ/53z3NY7TTDg2qdATiiIkiKCgwixoIVQE7cpF5KaNi0gCQYdWRQvNkhYGIa37A5SoFgUF2qIoDIx8IeajSedxZ+7c+53OveqqVh74Xofz+H2/cw6BCAMQbIjc8X/3fyTLkY8RbmKlrwKowZbDMXz7rbBpg2GMGxOJdLoueuuaNNLMe3by5M9l0Q11UZTl1ubWZ+ePjyHFZn6dPTb48/KeVKgf79t35chOcxZ8mjUDPWdMfZyh3MIs7N4/mbm92BkF4BYwNJh9MaWOSs5U2jZv2YuZczwC8QZrZUBskkBGEtzcNlj+kUQdJDVQIymzf0fn/AWCfKMlRjtLvq5qgBKj/Nwz67wV6ErX6qZSGaqEoHUxxxxUmQk1++UKKjtAolOE4/MlZB7eZpJZbxvxXAGm7dbvAXpwJ+dyQMQKtByxBAIyQiBpVI0NXFWsvXcRB/VvPnX99vz2nFftUfHiRfPA0k3FENPM4iFuOmCMZ5gajmuwFSDlp71i/Nrio10jxibj6ddjL8LzzxDcTVhwwnWhKr4Gg0ZEAuYSe85L0NYoNjVnkkbt6j7n9MlYFCArZB4W67YBaJaMvaUKBKJWAiAspGwWVspPsOI+RcNKM9KOlHIa7tW7xVQUoDe73jerFvTXmuAUyhCYGDWRJFfy3VXw/VdAtJ0RDdQatJ93mQg7iLNAmAW9moGOWgfObLAuSkEN7AWsqoghFHELNSEv0XtdIueFx7BXKXgQBGFKMEP4jg1U5MTDpaBuxbbTAr2NNOUFUUgJKSMhbAIPGWG/503ojllgFFzIkdRF7kqQfOj++uV+jVNsD3xzzbKuSzHWhJDRkBbPW6sML9JCTzQsueeQSpXABwdweVkq0iT/n4RCiO5g10RiJZwD9yBWpPX50qNB4p68/to8WNedmiCHey9NYDbMhfAAAA///6FuazAAAABklEQVQDAAPDMl3PlJWhAAAAAElFTkSuQmCC",
    "ogImage": "https://www.gstatic.com/images/icons/material/apps/fonts/1x/catalog/v5/opengraph_color.png"
  },
  {
    "id": "hdqwalls",
    "title": "HD Wallpapers",
    "url": "hdqwalls.com",
    "href": "https://hdqwalls.com/",
    "category": "visuals",
    "description": "High-definition 4K & 8K curated desktop and mobile wallpaper repository.",
    "tags": [
      "wallpapers",
      "4k",
      "imagery"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACYElEQVR4nGxTTWsaURQ9fqI2psSkQkQNUmiaVZtVswtkkaW6KMVNl+4L2UjdC8WFC/+DP0ARd4rizlYQpRarqHRRjPGL1ho/Zqbv3nYmWnrhztx5c95599x7n15RlHfCb5Utk2VZkSRJ2Ww27BTT2j82FH6jE48BAKdwiBgCCDXeNp1Ox2+9Xq/FwkZEwEjaSCE5gVRT423ybRIjPTqdDpxOJ2w2G//sdruwWq0M6vV6WK1WcLlccLvdsFgsTKSSMEEmk8H19TXOzs54sVQqwWg0olarYblcYjabodls4uLiAoFAAJeXl4zTCIhxMploaYnC4fDwENFoFHa7nbOIx+MIBoNIpVJotVoIh8OMZ4GULhGQNRoN5PN5GAwGHBwcMOjo6IiJzs/PEYvFUKlUUCwWHzIgXeVyGfV6nfWv12t21VTdg8GAZYZCIRQKBVxdXUEveox2u41cLgePx82p+v1+zOdzjYDqQbKGwyF/Hx8f839aM1KqVBQxPnj95i1k0VSz2axJovYRhiSobcxms1wjwrEEOnktP0K5tsJaMuLnyo7RXUubiXQ6jel0in6/j0gkwnVKJBIPc+D1evDiVQBPXTrM70WPNy/x3GfHYrGAyWTCyckJ9vf3Ua1WxWEeJJNJ+Hy+PxOqTuKXvoRvAxlmwy88Ng+xuR/j46cqA71eL+sdjUZc0NPTU+7QDoEkxFc+SxiOF5DmXwXREhbTEjarhYtIG6ngDoeDN+/t7WkEt+L9RK345IeM73eCU8zUM48YFN3uhdq6SGRjIrgRwXvhDuyY8vdy/XcjnyX8w28AAAD//0Gcd20AAAAGSURBVAMAZHxWDLqaLPcAAAAASUVORK5CYII="
  },
  {
    "id": "wallpaperscraft",
    "title": "WallpapersCraft",
    "url": "wallpaperscraft.com",
    "href": "https://wallpaperscraft.com/",
    "category": "visuals",
    "description": "Crisp desktop backgrounds, phone wallpapers, and high-resolution creative imagery.",
    "tags": [
      "wallpapers",
      "art",
      "backgrounds"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADEUlEQVR4nFxTW2hUVxRd59xz77yTybRNTYn9ae1PpBAo7YfVj1ohTKn2p62tEdtKQ1urCCqiIMQf/YmKRMUH6oeiGBE1YIgoivhCE1GMgs8PJRrHxzwcJ87cufds97lJNHjhwjpnr7XPfkqMfgSIri5Yb89HMfvsuugN/m8aPHZvOIY7dg4AtUOKdugAH8E3T8v2f53Hkr/vPJ1UxvP87/LewnR+f32kuln8hEvjNW89UTc+hYO2rb2pRdtP1iWu3nMoFvXJ2ErDlmj+3BVtM7LFf2bkOuFhm5iJh0EERBxFL+b0XEm0d/amPjt+NQJbwYuHtaVpJEIpQK/K0q96UC3Nr7GgJXv/h+biaqSxV3B+nxy4nLjx55bGurJLbiKsbV8LoRSR640E6ChC1eM7SVQsy2okJJxd/w7mfv26OFnyG+pJTpXKLvTHSU8dXjGIta1PqZBXWD8vIzrmZoTBHfMydGj5IOprPfW6Aj3EGqOVXDqyFQnHJvnspaIQ17h1Wl401LtizrcFzJ7yEga3TiuYCBBwmMtRCaOV4Bg0h8x5wvchDl5IiGSMMH96HokIoS6mAxxnfOhiDXNHO8cao1VjveS8EXY0LtyOwvWApbOyeFFkBhuXMK5UwLYIcwia36XR/gUpCC4O+6SwTXTrsUMDD0JINGjsO1eDros1qGU88DCEu0MOc3TAlaZ/QQo2ZLkqhOsKHbI1iiVL9N+PkIwDR/oS6O6PQzDuuxehIs8D5w/DNRqjVShhuGlixZvU6Fl3B23PsbW/50yt9Ygrf/1BmCQXbtWGD8XJazFhbJmsTZMmeqqpseIZ7UhBejDlzpPQyk09qfS+szV4kbV4ZLSsjWtp7IVXUsOT+oOUr36bWsDCdK7niwmVNSKN8+9G+WdepL/wx6mB2OJtJ1KTu/ui8Hz4hmApWDO/Gkbb99mB6U2ljejH7rHdGb9MZu6JuvARovh7z7nk/5t76xqMfUFLbmju1HwnS3aIH/E8WIF2btD4ZQoc8aqKX+CPrvOXmZK1jGtNE+J+h5iF6+9zzPcGAAD//3avAkEAAAAGSURBVAMA66Zwd4u3EewAAAAASUVORK5CYII="
  },
  {
    "id": "unsplash",
    "title": "Unsplash",
    "url": "unsplash.com",
    "href": "https://unsplash.com/",
    "category": "visuals",
    "description": "The internet source for freely usable, high-resolution photographs powered by creators.",
    "tags": [
      "photos",
      "stock",
      "royalty-free"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAx0lEQVR4nKxSyw6CQAzsrq+LqAl/6s2Tf+CfetB4UEHXVgppu4WQwCQTYJgdpuxGyFEgb8iE/DITa4U1R5iIpaPR1ypmYi2Y58EAalU6eglOYy/giTwhN6bBi98pBCeEFn3Ax4LXqIBRxr5gMp2NRlUvyLfR18gjNKOpgOzPIvbIu9F20JwFBZq/EhUDL/RCSbtyUOv9B6zYQCcuslY7AbXwt161A0FcD5DvztZ4uptkRqDrA/IxggjpRuj7iaMha8oGQ5i3wQ8AAP//OzvCugAAAAZJREFUAwAFszEzPym9sQAAAABJRU5ErkJggg==",
    "ogImage": "https://unsplash.com/a/img/og/default.png"
  },
  {
    "id": "pexels",
    "title": "Pexels",
    "url": "pexels.com",
    "href": "https://www.pexels.com/",
    "category": "visuals",
    "description": "Free stock photos, royalty-free images, and high quality 4K stock video clips.",
    "tags": [
      "stock-photos",
      "video",
      "creative"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACGUlEQVR4nIxTu4piQRCtvt7x/QQDA2URTRQFwdDQ1dRPMFD8DXN/YQURDAwWzExG/0ATQU30H1RUfN+tU9yeHWZZmIKm+3bXOVV1qq4ZDod/uFyuX0qpnxabso2PxBsZhkEwfL9eL0v78Da93W4NRygU+s1Ola9gh8NBj8eDzuczXa9XIXE6ncomsxiT4pVTsVjM4rsXL2UvITqdThSJRCiXy5HX66XtdkubzcbyeDyKgToTwwTgM5gfBVypVKjdblM+n5fou92Oer2e6nQ6FpcCEsnE4ff724iowUi5WCzScDikRCJBq9WKlsslpdNpKpVKKE1NJhOLdZNSoZAWTOpjdmq1WhQIBGgwGFC1WqVarUbNZpOQGXYmU9AFAQ2IhQU8iILBIGUyGTn3+306HA7EQtNoNKL5fC7EqVSKuAOCMcGqDdHf3t6kdXg8Ho/SCdQP4mg0Kn641wHNQqHwD4Hb7ZZvZAJjnaher1M2m6X1ei2awEdKh5L0TUMmjUaDptMp+Xw+CWhCZW2iKqefTCYlAvedLpeLOMKv2+3SbDb7AMNUPB7XQyT95Wmj8Xgs6ZfLZVosFkK23+9FbAwVRhoYDK15v98lOC7woEcZhjeobZqm6IDsns+npedGREQv7VGWjDCmeiYA0Aspa7CtmyUu/PCOg30hI/4/ETVY/we8TQxOsckkE/r7I3005muDPoFR7jtPY/MPAAAA//8N7KNiAAAABklEQVQDACl2SGfQUq7OAAAAAElFTkSuQmCC",
    "ogImage": "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    "id": "keybr",
    "title": "Keybr - Typing Practice",
    "url": "keybr.com",
    "href": "https://www.keybr.com/",
    "category": "utilities",
    "description": "Touch typing tutor utilizing smart generation algorithms to target finger weaknesses.",
    "tags": [
      "typing",
      "practice",
      "speed"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACfElEQVR4nCRS207iUBSl7SltASkFuY2XUTQ+mDDxZUzURP8Fzbw5nzA+jcn4AfIPfoITH3wiBN4IF4EQeEAYaKFceqWls2Y8Dyfn7Mvaa6+9yf39z+fn37qub21tHR0dXV1dcRxnGIamaQLPB0OhfD7vuu7d3Q+e52FnplP18PAwl8tdX+eSyRR8qjr1PM/vZxmGSFIkEhFfX1+z2S97e58TiQT18vKyubmJDyFkMBjUajVEUxSdTqfi8Xg0GnVd5+bm2/b29sPDr0qlQlmW2ev1/H4/KqrqrNVqJRJxz/MdHGTAbb1eB4PBx8f809PTyclJo9Egtm0zDNPtduEAxdPTr6FQqN/vm6YJ+3Q6rdcbsVgsEAiUSiWAEvxN09jZ2ZEkaTQagQBQQa9Wq/M8N58v8N7f389ms4VCARAkmUyoqgpUjvODQ7fbY1lWUSYflWGn/p/j4+NisYj2CGo5jjMejzVNXy6Xi8ViudQ2wmHItVqtAA/FJ5MJxNrd3UW3NKwwvb01oSaUubi4gGiu4wIeLkWWbcsSBAFTOjs78/l8tKLIyD4/PxeEALQCZDi8ochjVIc7LIoRSUICWGQyGahMWJYTRRFxyBwOB1B2OPwjRkSeF5h/h3jeGv1o2hIQaJ1gDvP5XNcNkEc/iMPUMGYICjzDWBiGDgsERZ3Ly0uC//u77TirWDSaTKUIYdEMFgkREECWZWwHKCAM5UCepFJpjIymaQzBsiw0apoW4tA6CkLW2WwGL97Ir1arBG6sF00zYA9gDAF3Ov3Jti2KpgROALdOp9Nut8vlMt5IMBCKEwwGUBG8sRSyrLjuGvNqNptYVUTDiNl9v739CwAA//9rYH6SAAAABklEQVQDANLmdPkYYkAkAAAAAElFTkSuQmCC",
    "ogImage": "https://www.keybr.com/cover.png"
  },
  {
    "id": "monkeytype",
    "title": "Monkeytype",
    "url": "monkeytype.com",
    "href": "https://monkeytype.com/",
    "category": "utilities",
    "description": "Minimalist and customizable typing test web application with comprehensive statistics.",
    "tags": [
      "typing",
      "benchmark",
      "minimal"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACTElEQVR4nIRTzWpTQRQ+M3PzYxpNgo1KW2raRtClS3eu3XSh4Hv0CXwC8S1ERBC3gjtxqSLiIjSQpn+YhqTk5qZp7szxOzO3ibSLHkju/Jyf7/vOmYhgDzbvP4+02mGiR9hWKTMFky/DaGFDHP5JHb9utTsfVHNj/UVkzDu46syPLwIvW5bIX2PlUmtfmjvLtY84WGZ2abhT6qLiZQT+Usu1s1gZrdTjCOeN4KBMFsBZErpCxeE0dUrltGHyDg2NvyhgCpXYsoIjoZLsia0L8PE1RaPKW5WQ2ZEkjXQGkXTeKCllliIyNyKySSqYKFcphERIWlq/SavbWyq6lZ9rpB42G06qrm5vcrFeUjqnBTMNfvylcrNKpZUlOv6yT3Z8TivPNqCcAxrm7vuWmhyOWQd+TKYAJgC0/2mXznoJ3X26RidfD+nk2xHVn9yjydGYetgDOh1/7qjzwdSrFig4oI8Uxe0hKvfo7CBGQELDX30atYbCzFNKOiOUYop3T8lOZl4n6T0H7UEUX1MwyCw0SEQjDVT+CmeeHkwXDGci80LEnFbe2QWRvcN/a6E5Xzuet9nUb9deSTmbzHhyMAa0VAnccXdEaTwj9J2SbkzC2U5TmnRjlrWfDlEQXeiDQs1OLbIDRV77YWGIJZAFhSRRAl+mB3eYHNaeAg00zvZkANCFFAGYUpYhZZ+Iw0B5zhhOqZitU4mRWPF6w745lBM9M7IymYs35eUl/0Z8AQyzxEis6Q9Of9aqld8otAanMn5Fuv45f8dz3mm1997+AwAA///Z9DlSAAAABklEQVQDACuhVbFiQV4NAAAAAElFTkSuQmCC",
    "ogImage": "https://monkeytype.com/images/mtsocial.png"
  },
  {
    "id": "frontend-mentor",
    "title": "Frontend Mentor",
    "url": "frontendmentor.io",
    "href": "https://www.frontendmentor.io/home",
    "category": "utilities",
    "description": "Improve your frontend coding skills by building realistic HTML, CSS, and JS challenges.",
    "tags": [
      "challenges",
      "learning",
      "frontend"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABMElEQVR4nJRSvU7DMBD2XZxGArWV+Bk6gMTAUh6AiTdArDwhz4KEBAJ1CFInQFSUvxaVOMHUvtpx6ljp0t7kO+v7uR9ORGyTwEbu8FSGT8PgjRwAGvlaClAG81qBGq7aMDEt5FgUruLA7lEBvA1agid/8vU3N3VEfJkJ8T93mFrBEaB3DJBE+FXIq8fnp5mIELw++l4zIdPhh6GsHDIWA3STWBOpYFa1AufR9d1o8mOdKKWl0p0kPj/qnex0sJqC1YflGMhwp8PPm/vR5UW/lfBcqe0oUpqMH0daA7yIwdwO3gbpuH+8f9Br7+1uGVliBKXnamK+Y9cVInxP84f0Pcvk2elht93S2hLVm/QKFmMe9huCPbKyDE1AuGO/QOMZVk6DB1cTNkfhsYQw2PS8FwAAAP//YKNFHQAAAAZJREFUAwDtNuIUxAMuugAAAABJRU5ErkJggg==",
    "ogImage": "https://res.cloudinary.com/dz209s6jk/image/upload/v1756397300/Meta/meta-default.webp"
  },
  {
    "id": "codedex",
    "title": "Codédex",
    "url": "codedex.io",
    "href": "https://www.codedex.io/",
    "category": "utilities",
    "description": "Gamified coding adventure to learn Python, HTML, CSS, and JavaScript from scratch.",
    "tags": [
      "gamified",
      "learn-to-code",
      "beginner"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADdElEQVR4nBSTW0hcVxSGv33mxMt4G6uZ4CWa0RrHcRKTQqyYlJo+tAQRSqChFApJoaSF9qF9KQ290ECFUFLa0Ap96EMf2r7UkIZWUogUQZsoVjReiDFaEx3nohM14zi3c87qdsOGfVt7/+tf3za6ujAlSd+1r4j/2IftODh2wuVIBpGc7mnkrxvI9V9x4is4IoZcuUwc6NXdVEuzfHmtj0uWBZc+VlJ1UFRSb6+uQirtwjRdWLkmtrZ38XiWaWoSERt14V3IZelVqQ22v+2j2OuF8+cxxv4pk7XwWUqKX1GlpfvZ3NoiFErry3LS4i/X8yHlb/7JCRyNs73BjrKfIkYJbDxGBm6dxVf/nmo5HNRak8zMzfI0kaC65gD+xgYyenxv3pKc8z6ihrk/byhTBHG0pJE7bhUNdVFWFOLuZphQJEZrIMDJjnbsZJKhkVH+iK5REFPqzdMm848gGhUxcznIEyjI14ZJQm2s28TW40TX12lrDTI+OcnAWozVOj+xmmpOZBbJpm3x1aOUjjM+uYyaGoMXXtxVW4lBslkXbncBlpb1JBJheCXEaGUr3s5TlJWXYqfSJFOG6jwJb7yFMsIRSO4q3MUgpHi8uo3jWLhcLlymienKo6KqkvDMCvH7S7gNFzk7T5+B/p8Vhj6zpx32QfeZGdLZu0zOPsDSdVV6PWNbbC0uU7kwSs/OMkXJaQ5UD2PkoR9zMPZiXQakE4am6Fl8viYMlK59ln2FbuoK82mevEVwdZYKsTgSPEokepp4GD74SMf2/8Lnh5tRAzebJZf5XnWf6ab+YDXTM7NkrBymvsijDI6f6KC94zldkX2MjRdLXd3fquIZW0xfvcJxCeGoW2WTczqfhxxq8PPOxbf5d2KC2ppaGhsPEX8S10xYTMwsaevHVLlnT76uRFsQ+foKUljg5ebvPXhK/cpTmkdVTbmWe4TIeoyRO1Ma+wK83gi1tX9KW9sUFZUoOwNqdIhtzUtxcQVGZBkGBxvkv4cvaQ8a1bHjAVJZS3MxRCBwW461zbHfqw3Shn9zFaf/hkZZdrhKER8uTkNJCeLVgDxagInxJpLJ52lpmSAYnCPfo7PbUeBGbg+IermHvdar9r6kxv67T7/gNZ8Pz4WLSqm0qN+uw+Q9qK6CXc3JqU6kvUMwdMTCAzZfPccP517ns/8BAAD//0x3y1oAAAAGSURBVAMAOgCeZxXgIMQAAAAASUVORK5CYII=",
    "ogImage": "https://www.codedex.io/images/landing-page-seo.png"
  },
  {
    "id": "apple-airpods-pro",
    "title": "Apple AirPods Pro",
    "url": "apple.com",
    "href": "https://www.apple.com/airpods-pro/",
    "category": "inspiration",
    "description": "Iconic product landing page with dynamic scroll-driven reveals and 3D typography.",
    "tags": [
      "scroll-driven",
      "3d",
      "apple"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACB0lEQVR4nHxTv0/bUBC+9+oaqSQeowxURqaiQYrNWKQyBWhFIEtG1KFRJbrSjKgj6kJbtaIjzZQ/IYhABvgXgBAEEggjImXFDgMm+HFnYhMSh2+w37u77+z78UnQhWq1KruuNMsYfBBCqGRjjJlCwDbnrc1kMul0xrPOy8HB0TyS/ihKdCQSGQRZfunZHecWms1rsCz7FJMt6fpYqSfB3l5tCZ2/hoeHeDQagTDYdhPOzy9dIVh+fDzxl2ycHvv7x7NEHh3Vesg7O7uwsPDJO5OPYhgTv4nj/cFDzbymqq9HFKX3y4uLXyGf/waJRCKwWVYTTPPyjPO7MY7ktKIoT8irqz8hnZ6H9fX/kMlkYHn5O+RyX6DRaHh+isU+acSVqNvUMB/l8hasrf3zJxLYY7EY1m9CPB5vlzMIV1fWR0kIrsqyFARWKhUIQy73GSYm3gV3mhD27Y3UHcg5D01weFgLtWNHXdNxWoEhlUqFBpZKJSgUCsGddgNxymnDaEl8zMxMg2EYoUl0XQ/Otk0cUW6P8cWRqg5p/iTq9TqsrPyAycn3oGkaFItFmJpKQTab9fydY/Q28WEp3A1cEjYwIMNzuLlx4OTkTGD1c4bxdtPrGB1QA3l0uLSu/UA+iqFY4pCtj5gUFNOrDjG12mKy+ovJB/UEd2MOf3H6Uc7iAl8VnNhGt5zvAQAA//9LSLTdAAAABklEQVQDABPn5O9SxJw7AAAAAElFTkSuQmCC",
    "ogImage": "https://www.apple.com/v/airpods-pro/t/images/meta/og__c0ceegchesom_overview.png?202609132104"
  },
  {
    "id": "dogstudio",
    "title": "Dogstudio",
    "url": "dogstudio.co",
    "href": "https://dogstudio.co/",
    "category": "inspiration",
    "description": "Award-winning multidisciplinary creative studio site with realtime 3D WebGL interactions.",
    "tags": [
      "webgl",
      "threejs",
      "studio"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACE0lEQVR4nIxTO2sUURi9j3ntjDvsPIywTcDCHyBJK4KVIAHTiQgaIhaxiFja2YnWFqL+AIOFYmEiiJhSkSgiPjohUbLZ2VnEmd3M3Hs9u5mRZLJ5XBju4/vOOd9rGDl4sfIQNhpT2KztRu0QYGnbdvOIbV8llJ4njcZbEse90oEfBA7DcMI0jGeU0kBI+dxm7E+apquw0dJpT7DneWfhdRfK/X6W3QBJO8/zrACrvQgGRhm47qSp6w8YpetKqYe6rp/C+TLn3CzAIyMYMjuOc0yzrBcA/hZKvZJSdnH+1N/cvAiCmbBeP1GSaCMIeK1Wuw3rupLyKZVyVTE2CPsMopBCiEfcMOZwn68WkQ+L5vvzyDkH00ncBYEkInjfbrefOJZlUcYmiVKRY9unkzRd5jvyDoJp5DlGlfpGGOu3NjZmofrX0PUFrmmLAK/Bfh17HSI/kyR5R0uCMd+fVpxfabVa5/wwnBVZtmKa5jjIJnIpvzDGZlCH1/iWEM1HYHqlMkGvb6KaF5D3Gr7vUBlXW0V6mWXZB0PTLoFkMYqipWqrhwSu6/oGpceJrjcHj7BMoe93ut3ur6NBcB/ge51O53MpWHTgf+67VuB5c4rSN5zSa5kQj+M4XimKLKq+rNJCffBGOY80xm5hBpb3A1cJVOEkmVIpSJrIeaHwGQkmZPfPtDXfmiYxPF97SfKDbJv7UesfAAAA///6/75jAAAABklEQVQDABvy2pwFVO60AAAAAElFTkSuQmCC",
    "ogImage": "https://dogstudio.co/og-image.jpg"
  },
  {
    "id": "active-theory",
    "title": "Active Theory",
    "url": "activetheory.net",
    "href": "https://activetheory.net/",
    "category": "inspiration",
    "description": "Creative digital agency pushing the boundaries of interactive WebGL and 3D storytelling.",
    "tags": [
      "webgl",
      "interactive",
      "agency"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACz0lEQVR4nKRTTUhUURQ+5777Jhr8QWlylLRNOqBgBuFGhCYKwaXQoh+hFpWRrlplBAVTQhgEBVaWLcRVm3AxoYuRCiEsRAwHXagLkUZHTWYG5ufdd0/nvhnDfRce3HfP/c757vm+I6G4kD8ym+bm9k4QeEsAhAEp6EUJExpgBjS9jcfnvh3GYOmHgc1liGVDfHxTCHGEiICodBPNh6C1znOZUaLM/Xg8njnIgqFQR5mUzkdLyi7XVQbmchJLCPR4lfK4vCzLkugqNaWUfWllZTZjmUgwWPvcsuUVBhe4spBSWvl8HtPpDGRzOcjlcug4jrBtyWFy+G4IQZUnk5tRrn62Q9oixhQtpogMFul0mkJNjRAOd6LWBJKBGxubEIt94X+tmZ1J5CpHn5eWjX184ONzxfxEisFtp1vxzcgLOF4TMNXBtm3kGNztv0fR6DRWVJRrTuCzbOqTAjDMVYiTiGw2C2faWnHs/QhkMmno6bkKvxNbcLKhHiYm3kFD/Qks9Uh4GMZK0wJE4oAGv9+PQ08feeDrN+7A6uo6MCng3GBU4SYaZZA8eVhBxBpxIKlSCqqrqyAUaoTJySgsLPyCQOAYn7tQVxtka3gyenIeXiZBwqTjd1IisU2zs9+ht/cyXLxwDtbW1iHUdAqGhyMguAcosGgrpsxFjVG2hAaa4QNkmlzAhcEHjymZ3IGxDyMQiTyE8fFROOr3g+nPzs4umSfxYiUQDdaqrqrbRgHXDBuWH/b2/ojYzFdPxu7uLvzxcx6eRJ7R4mIcop+n0efzeb7iPijXoQGPU0tL+0s2Rz87rMBMZKFQ8MpUVlbS/v6+ebfnBzaS5q1ix/pcR71aWpobMCog23IQwGk8sDJXUVzBSqVSwHsovhlcfqOxsgFPFTGAnpV3dzcKgUDlJyJZwYK0McBngsIbhuK8mDZx0gJp/ZqH6fby8vy/Yfqvcf4LAAD//x8den8AAAAGSURBVAMAQkpy3oYQF2kAAAAASUVORK5CYII=",
    "ogImage": "https://storage.googleapis.com/activetheory-v6.appspot.com/media/social.jpg"
  },
  {
    "id": "ozone-pro",
    "title": "Ozone",
    "url": "ozone.pro",
    "href": "https://ozone.pro/",
    "category": "inspiration",
    "description": "Next-generation in-browser collaborative cloud video editor with GPU rendering.",
    "tags": [
      "cloud-video",
      "collaboration",
      "gpu"
    ]
  },
  {
    "id": "medium",
    "title": "Medium",
    "url": "medium.com",
    "href": "https://medium.com/",
    "category": "utilities",
    "description": "Open publishing platform where experts share insightful engineering and design essays.",
    "tags": [
      "articles",
      "reading",
      "essays"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACN0lEQVR4nJxTy2piQRA9fU1C3iQESSBmJeiMOBtREBRRwZ3gxsXg2pWL+Qa3foO4EUQkPkBBEFyoGxVXLsUP8IUPUBB09E5Xe29yk+UUHPtaXV116nS1BEDPkeXYcRw1kL9Bu7dTzuh1/CfF8ZuDSZIkQCbLdObTyKfT6WgB32Pc9YvjjT7+0r4SJynVoPGppvUfVR9TKfLKcDqdeH5+ZqPRCJ1OR61MFWE2m2G1WjEej+V2u43j8ShYScphxh3MbrezYrGIarWK19fXj9KcOtLpNPL5PChGYUFtypKW4nA4BOHx8RGRSOTk5NVtNhsOh4OoOplMaJVvb2/hcrlEz6pgjIJSqZQIjEajuLi4wPn5OSwWCxqNhmhnt9vBYDCwcrmMl5cX0YLYILu7u0OtVkO324XJZILX64XRaMRsNgPpoiZIJBIicalUgrYF4VwsFkgmk+J/LBZDIBBAq9XC5eWl8On1evh8PkynU/j9/q8JiPrNzY0QiwJCoRCenp6w2WxwfX0t9Dg7O8PV1RW22y3q9frp3hUNZKJHAev1GoVCQSTNZrNi3e/3IsF8Pkev15PD4TCCwaCs1YBxcUgYcSCXyyGTyWAwGIBmhJjQen9/j3g8ThOLSqXCPgaJkng8HqxWK9bv9wUTEnW5XIr+3W43Hh4eSFC52WzC4XCQBuy/RpnbUW2bHtNPnB6GGGd1yrTXKzJ/PjShGf+W+K29U4IWxxvHj2+T+YWBfDIolQ98feeD9+cfAAAA//82EFciAAAABklEQVQDAB4kAi1OCZsJAAAAAElFTkSuQmCC",
    "ogImage": "https://miro.medium.com/v2/resize:fit:1200/1*m-R_BkNGN1mPNWFZaTeOkQ.png"
  },
  {
    "id": "mangapark",
    "title": "MangaPark",
    "url": "mangapark.net",
    "href": "https://mangapark.net/",
    "category": "utilities",
    "description": "High-speed comic and graphic novel online reader with clean pagination.",
    "tags": [
      "reader",
      "manga",
      "entertainment"
    ]
  },
  {
    "id": "tailwind-design-system-blog",
    "title": "Building a responsive design system with Tailwind CSS | David H.",
    "url": "davidhaz.blog",
    "href": "https://www.davidhaz.blog/posts/tailwind-design-system",
    "category": "utilities",
    "description": "Comprehensive guide on architecting a responsive, scalable design system with Tailwind CSS.",
    "tags": [
      "design-system",
      "tailwind",
      "article"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOElEQVR4nJSTMS8EQRTH38wNhUIhUeqVQusLSESiUvkaPgJHo7tCo/AliFJCoxWVQoIoBNEQ3I3f23uXezdZZ73kt2929v3/+2Z3JolFznmdtAATMhof8ACnIYRbq42MezoO3EyTD2BDxscrHME24kd0pJDVYJfJLeiCuoYacTQ0bmAT8UVlwuXSWtdoaYdOGIr7L5iEZ1jG5DramqMrDg4pOtLaT5iBtri2vLguvFmypa7Q/VKsKZIxJtll7WY1NRCWJmIGynyS/4df6lSU0a/cNHqW71Ph3OTtGi3r4rz8ffkPcXBvv4NjNXiT4UepM8mFWHes6nbYSE86OLOJbmFSGn1bne7EQ8Sd6lBxmdVWYFGGZ+G3X/sCbcR7g4mqEJM50j6sSX+n+efv0j/OJ9BBfDU4iVrwAwAA///BcNxvAAAABklEQVQDAIANaWnTskcUAAAAAElFTkSuQmCC",
    "ogImage": "https://cdn.sanity.io/images/bj449gl9/production/91d1aeaa6f8c0f09acb6b1ec3812f76e44cbc624-3022x1826.png?rect=0,124,3022,1579&w=1200&h=627&fit=crop&auto=format"
  },
  {
    "id": "linkedin",
    "title": "LinkedIn",
    "url": "linkedin.com",
    "href": "https://www.linkedin.com/feed/",
    "category": "utilities",
    "description": "Professional networking platform to connect with industry leaders and discover career opportunities.",
    "tags": [
      "networking",
      "career",
      "social"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACsElEQVR4nGxTS2sUQRCu6uneyexmd8OwIiYxRGJA8aSCxJzUWyDg2Rd4D/kB/gFvYjBHrzl4ETzlFJODl6g3BRUUBEnwkTi7yWZndma6u6ye2SUEbKa3e6vqq/rq0RKGa3m70Qo02eQQoyhkQcQ7hJMrKo+Q5atzh+6KcGNLBrPihZD+zTRLCRGEEkjwn0VUICx6viDd30g6v+9KmAiqgNlCbrHaGlWZM4liUtJziJMOULDIUqlAXITKVE22fE0dTf3xMQufHl8zltWXHr1LfnXNqBIck0CwcemKHAv+MQb5FkNXkxyQYyNAY8kzREgIupRxPlgwF86zxwz4s0V8l0yR0cJ6o3p29HtOIhwbwb9OeRCbkIGcDpk0pwCQ0mag7EGipSdQjShF1ubtJPbPSTjTIG0NNEY8erV8MbGc6eLTD+nKnZkfV6cb/rONHbo/f7p6eaqeb31ui6W1r7W9LtWVx2lFEciwJvGwp8ljfvOzzUlHSwqM52aawYXx6uTzB9PaoOpz5FO3r7QgqIidhScfa0oI4bosIvaCvIgsJqkxvdRSkUai3WlXNvf2godvvKW1b7vsW1+fbTbHagpzroQbBxGG5bCgK5hAdNtVm0/PFWrzSyfj+gQv3/9pZca6Ttal9NBasm7gmMFwSOh4M9LasnM+cwduJ7v1M209Pm1h4iLyZIrWBFMlZ4CgpCB27vpD7j4g5ryyEG2FZcrp+XOY1kSD5P4+gMIycKenwRY6AK4BxjnozBTgQub0WI60Y0QOi3BvuxHUsp/oVao1RUXIo77haiNw0yFODWhbTs6o7xWRejmjTRYnvcoZCbtJDOe9dfDgVruXWbYTjmY34YnkSFKUTWJq0D7Srr62UvEF/3/tsDgoIcLy2/rw8brWDrsTRcfPeiAqH/XqXNcB/wEAAP//uC828wAAAAZJREFUAwDYEFzZoKUhQAAAAABJRU5ErkJggg==",
    "ogImage": "https://static.licdn.com/scds/common/u/images/logos/favicons/v1/favicon.ico"
  },
  {
    "id": "x-twitter",
    "title": "X (Twitter)",
    "url": "x.com",
    "href": "https://x.com/home",
    "category": "utilities",
    "description": "Real-time social network and discussion platform for tech breaking updates and communities.",
    "tags": [
      "social",
      "updates",
      "tech"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAB00lEQVR4nIRSP+tBURh27zVI/sRmlZLVB2Aw2MQHsLAIgywMFsUgBkKSEiWKAbGKmBSSTTaFhBQpgz+/R6eui+F3h3Purs/neZ/3fc5heP99FEVxjwzZZDKZUCjEerlcns8nF42jWCzGz/1+R4QmBWKxWLfbJSuYNE2/cjQNtFarbbfbcrn8Q2EymRgMBqvVqlarTSZTq9Xi8/koqVKpCoWCy+VaLBZvAkROpxPDMEg4nc5AILBer+fzuVQqrVQqiUSi0+kQtReY8HB+PB6lUqnZbI5Go1qtZrFYMpkMpLLZLGqRAV5IsgENHY/H4/V6r9drMplEk71eD2jUYtFvAmlsv9+Hw+FUKlUsFqfT6XK55P26zD1g0NvtBk/6/X4+n0frRqNxu91yjX4rQBpovV4P12EXJoZaPB4Hmrj8QUA/GEOj0UQiEZvNZrfb4Wa1WkUJh8OBFMthWKpIJKrX66FQaDgcrlYrpVKJftxudzqdHgwGu92OXDFFygsEgkajUS6XMS5MRBuYB5P4fD6I+P1+s9kMHcQZ8lqCweDhcIhGo+RCEARuPB7ncjmFQqHT6TabzWw2Q5ZiH9/xeCRkrm8wQCKRnM9nxLF+2/pt+Q8f3x8AAAD//+aCMSEAAAAGSURBVAMAIEX7cbBL8qcAAAAASUVORK5CYII=",
    "ogImage": "https://abs.twimg.com/rweb/ssr/default/v2/og/image.png"
  },
  {
    "id": "youtube",
    "title": "YouTube",
    "url": "youtube.com",
    "href": "https://www.youtube.com/",
    "category": "utilities",
    "description": "Leading video streaming platform hosting developer tutorials, podcasts, and conferences.",
    "tags": [
      "video",
      "tutorials",
      "streaming"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABnUlEQVR4nKxTvUoDQRD+du9ODUJAYyVREztFEP8KEXwDH8DON7DyKbQWbCxsfQiRIIJiIYht0KQS1CBK1CQ3fpPdeHdW/i23N7uzM7PfzHwbgkMAQ2HhZGos+P2FZPXqgpiHYtTZOMWPh/fVxcwY0LfEoMNAMEiZozrkeeBNO/y1CbIJdF4oH4D3c4OrGhHMr1GxT4MRZ2ydyOBKA4x7i3uuNzTAMW9dZeQWvay35mw5EJYg4k8n46ZQEUT0qdBBJrmgQmgpGoCyE6I8ESKKIsRPEazVdMLERqX6mBI3tuBudvWAVflssLlucLQHLC8SQYO6N6OHSX7qIwW9cSDJjwc+Dtqs28osUDkADneBUhHdtIxJtzpn8cfBvPCqkdxWhJ+7IWSaJ5fA1jZweuaB9mv90i1psgtzNeIadcXv5kZJ+GVSo35n0Gow9byg69frhnjyoq7VrbLwxWwbA0H1xgG0+VQbjW8jfBvbVU2BGGWKll+IFHrGA9knogplqJBIZsdTeXqc+ZHKdojbb1DZPLKtpPL17X89pt8/5w8AAAD//9kL5poAAAAGSURBVAMA7iCMXqNqsDEAAAAASUVORK5CYII=",
    "ogImage": "https://www.youtube.com/img/desktop/yt_1200.png"
  },
  {
    "id": "reddit",
    "title": "Reddit",
    "url": "reddit.com",
    "href": "https://www.reddit.com/",
    "category": "utilities",
    "description": "Community discussion forum featuring subreddits for web development, programming, and tech.",
    "tags": [
      "forum",
      "community",
      "discussions"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADFklEQVR4nExTS2xNURRd+5x7n/eppqVCKRpNK0QjNI0ivomOKsLISIKIX5hIfBPBQBgYqURF/SYGJIIgaXyKgW+lA018n9anflWe9/ra3nvu2fa9KnGTfc/J3mudvc8+azuQjwGiaJHfYsyHwloQ5omnTIyg6YNE7kM7p+iGufs/hzD0cQ2SGIHDsl0vFBc2QnG4KCueEBnAh0YTUthBV5EPeRSehBokhHwJDuoFEnIiniQnskwDxeOsu/2U1blehaMbFXK/WqTKFWhBXkWlh5lDsqHBKJNS2ipN5Cq6kEnyLlTT19p6p3/xSuVPmDkoldSD9KHoCnLnOUJuFSfBk6yuVOXJGQa40w+6lEvgwERwdt0RaD+HMc3bWWmp0JXiDS9whLweBi47MYOKSsLnN+CK6eAFDVQcH89bHFBRJk0F10+w7mwHTZpC+PIW8D1XuBuIFyGNwlHlfPAK8+Qaos/vQGVVFDVhqMGBmA572v2aeXQ56OVTpt3LiLPfuxT6UGbmNiCYWqdIavPHVtG3J484yOdhjB+Z7evD9yeP2S+tpBATTJ2tgrlLmXIoU4hBeekX+PYzEzYdPRfPsF1dR96Da7CkpEsKA7cuIlgzi35cPf8XI9jBtx0kXIkWqPfJ9gdInN7HWYnGx5SgZF4tp8rLEdMartjw6mqMEl+8MCUFC+bsfk62P0LIpaBenVXGrjIjx5tPx57p4YXFrMyAOnT4CHe+eRUJbUJFJe/euU0yJm32d4ZKN80InJ4uxzrqnFKBPc4uGaf7gx7WvJfTvXnq9TWnUgm61XqXb95p5YJkgn4FDqd/5il2ci873V2iVfIlcVOUgZegUfS+GVm2PXVL6UvDViSn1CLjGREioyge43zHY5Reb+SSh5cDFJILjxvpJrbQ0GBo0VaHqLoKOZmPpOaBcdNA8mThtPDXTk58fG7RHzgoEofHLejFcrShn3ihyEFjl9ge0ZfDWtRtLJEnygyiCSVBAPFwp+RNbZOQd1Dbv2FaiGnyHG1Cjg0N0d8JVerf1gjqIwJ7X6LNdBv3/h/nPwAAAP//SvRDqgAAAAZJREFUAwBfw1uvqcNmZQAAAABJRU5ErkJggg==",
    "ogImage": "https://www.redditstatic.com/shreddit/assets/favicon/192x192.png"
  },
  {
    "id": "instagram",
    "title": "Instagram",
    "url": "instagram.com",
    "href": "https://www.instagram.com/",
    "category": "utilities",
    "description": "Visual storytelling platform sharing product design shots, reels, and digital art.",
    "tags": [
      "social",
      "visual",
      "mobile"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADNUlEQVR4nBRTS2xUVRj+vnPPvTNzZ+a2Tgs0lUeLqZCAUdxYFioaMcTowpVajdHogsRI4qLuFBNNlLDysXBh1Fg1xIgmunBhQjAuSkKMvAIUykAolEJpO7TzuNN77vn5ucnJPYv/nO95LPR7d8C9EcKMG8HWaNWxnKaouhYT10WP5KjqTAxKkR4FOqn61XMZFj59AE/9xPcH3ZsRg28jAaJF7/t8yv5CizXfRuK7iHM9JEToAZM73WUSUQxl2WdojPGz+/2lkuFwuOTzLbtzu30fUamJBNYzCKC4Cp8LmEP8XMb8wAz8kVkXwtkOls7ZzUaG9TJs3OODx34I0PqyITLZoM06MCtdQDFRCvXvaUcrEvyxhXy+Ebij0xKZ9ghPrU991kz54F8xcGxZ2u/VWcMdGF1ISoquNFor4N7tkHUWtF6ws0w88ytyprCD+W24JEXUs17c8eusxVcRrMkgB0fB3YOAzvPwLOToHOgy4FpKPvewCFZopCmmyvOshmdhbJeFoA4jJ4HPHwK3FSDPTkCe/gXyeA8wquubf8CoBTGe4LKas0xjo38RlSZhAtWMKWDrPLBrE+Sd7yD1Kcj0NOTt3yGvb4bEhHRUmlVW1IvQhUXlf5iqWh2sQio3gN4ZRVDj+paA2hzQVh/KZTDL4e1tzbpXWXr1tqsXeN0nV8FkBkQKrm2paafA/5TqgX3gzhr4ZD/41WvAkeNguw7e5yC5ZipOJYSw7J0VqeY07IqvNSkbV4DD+8GxD8AvPtIiKJvJScjX30MGU6DYhLon2ibFjMVKbREsOvjuPM2OHeIvHyLKp4FDr0BKQ0AzAq+oYYHKsC2YJ94SWWhQRBlHQ8qgzwuLyubEx5AX/6QpaWXmj+lACWypN2kIebSshgcwm0ZF9rxA2btf47MacSz0H+IC12JECnAyssty2zhYGNCc7zmpJdLEkHntgMpeWCAmJsT/PZUHq49YaWw4Q3cQY2YdfmQ/KVR7lTFC1acVFqeHOwZsWMjNIlhX7TcTmM4w5daQY2PDS8aO42d9Nq+igJNIFDHRQ7EOxooa52BFW5l0NN6mYMAAa2yOKD3hw8WXefGT3+4CAAD//3mbWbsAAAAGSURBVAMAcjeEKDwqBdkAAAAASUVORK5CYII="
  },
  {
    "id": "github-profile",
    "title": "GitHub Profile",
    "url": "github.com",
    "href": "https://github.com/codezenashish",
    "category": "utilities",
    "description": "Ashish Choudhary open-source GitHub repositories, projects, and contributions.",
    "tags": [
      "developer",
      "github",
      "portfolio"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABtklEQVR4nIyTwStEURSH73szZCiFopTFlM00CzYayp9gpxTFQtkQZcfeghQLC81kFvakLEjZDCuJsLCYwoxig5JixpiZ5zszZ+r2snDq6517z/ndd96557kG8zzPMWr4A5CEe/iCnPpbEDM+s4V1PJZhGhpq2768HGzAouM45UoAoctTxDswZP5nuzAKJVdPWlHxMYxBCj4hCxn1TzV2CMOwJFqpoF8FAYizOcNeEL8D3vSNrfBKrEBsHX8WvmFQEqegXhOLJMhBJZKfrJKfpdEaK+rLGmFSNtM43ZCHXoRp7YuH72mDK02UNRbGvYEmuJbETu3yCzxoYrkmrgmt9aNUpH7YVbGnJ4bsmfCbxuSKm1UXcLXTYm0Q0zKDvuGSzaBWIU1v15dmXb0eo1cl0xYhsfjHJ0iDo6Y6SEYrOJED4rpIwgXckrgHPVYFUdjGPYMIyOwUICFlXRLcZDEHfXAntwEf1ufLDU2oL+McgjW0V/YoH0EXLECG4LlVgTQuY6rDJbYPI/Dj+JISMK5bLRzyrjHpuvglzZmXqZRYsNZlrFKm/Lam+l/krU+QsV2FA/JSlsb7BQAA//8fGtSHAAAABklEQVQDAIsg4TDVy+61AAAAAElFTkSuQmCC",
    "ogImage": "https://avatars.githubusercontent.com/u/198221768?v=4?s=400"
  },
  {
    "id": "stackoverflow",
    "title": "Stack Overflow",
    "url": "stackoverflow.com",
    "href": "https://stackoverflow.com/",
    "category": "utilities",
    "description": "The world largest online community for software developers to learn, share, and debug code.",
    "tags": [
      "q&a",
      "troubleshooting",
      "developer"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABkUlEQVR4nHySzytEURTH33vGTBJFJD92VspuikyRlZSysGCpaCyw8g9IWbGl2Iwoi/kbLMSC/FhJIsVy7ERTCjPjc6bve57nNbc+nXvPPefc8+N6To1VqVTysKh9XZxNIsbJ0zYH0zCJ7s113UMLgiyF7b1oAAzKJuBGqhQc4DxrztFM3JgMkhh+ar+E2IKyrue42w9n4kWcmxBnyA1ow2ib80LILhfKxAt6YAelvg5pMYV+E/2u9YBzXkH2ZG/S9fy6Vdsl3MuwF3bQXyBfYAaK9p4ysXKCjluQknVar6/Cu64G4ATGLaD6UYCHoIlEq0eswB0cE6iIrlUlZZ3fcb/KZwybKyvBD2CvXsuooFKOLBj0gH2mEWiBeZythATy2w+Q1biSzt/1BbdwChNWFk7pUNODEhoQfTAKwzAEHc7/tWyjDf8DN8bI//cZBTMGoRH6cXys1s4EzDYh4zXokn9ZqX+AvfIE3dAMz9VX5VzdEyCli06n9jrHMRNV2ngsmo2nXa+Hy3KVhY25Ppy6v34AAAD//+AiM8wAAAAGSURBVAMAx6jDI8gjRPYAAAAASUVORK5CYII=",
    "ogImage": "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon@2.png"
  },
  {
    "id": "deepseek",
    "title": "DeepSeek",
    "url": "chat.deepseek.com",
    "href": "https://chat.deepseek.com/",
    "category": "ai-tools",
    "description": "Advanced reasoning and coding AI model delivering high performance at breakthrough efficiency.",
    "tags": [
      "ai",
      "reasoning",
      "coding"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAClklEQVR4nIRTS2gUQRB91fPZ7MQEctGoqHhRiCDEEBS9REQ0WTz4iV4CYkDyFbxFvOhBUTzpQRMTBCF4cdWDJmLEzyIKXhLEg6A3CSIiEo1hP9PTXdZMXHcDig1Nd9FdVe/Vq1L452Jqa2M3Pst25V5Z6s/tLKulT8S5HEXxWbaTXf6XnExLIjZ1sr+uETXmO4yTRqPrYr8xyD28julMH7ZEERqmxuhJtc9viMSZAR5yCN3MWO7UcVHe6h2fgjCPliQz8dZgGc509HI/e5hwDFoF0rYEQabPXEwFakgXY7SEGJe1DMchbS1e5X/ikB/otelab0YXkZckszW12FhY4Cy19+odvu++TMjEjsLaMkcQf9k2FZATFvG2NI/tXh1OCq1zcdLI4IXmQperlDpqIjyGxR0h00yKD7gerTAhGyhSxQJ/dF3a7Nfzc0R8i5ViQXVq8hpdSlQgpg3W2kcTIzQ2OUz9WlOzDnFTeeQoVzAw50olZJRCk5dWlwU+6wiLhexkR4mQP0jRrriYsQpTo/RZoh+zGjeElpI6dJEjiCO6ojxEQm+2NIcPSYAsGdGSnipF7bu7sfJdlkIkzQM8+IqeSPMb5ZIjxbgvKgwIHpeZ7+aytFBuKiGEcTm/pQMeTaJK8+zt59Y2IF0I6Yg10IIw5SiqL+UxY0J1vtJYEkB4z0UWJ/yAMvsGeTym4bA92LAar32CCUO0E3HRTcX6IschStUtTeVG6ujhXjfFw5JxXqAu1AS0ShTQQu+qjXiNUKmV3+tFsdNSo3viF9O3VYNCvOc4b/I8DIqx04JDgf5Fgr3PG1x4NkKfYnRJnaonpnJdjLgoz22npaFTTY+Sxn9W1QTGzqw6RVtkD5uyc2L/ZYzL6xcAAAD//+1hzFwAAAAGSURBVAMA3lgxouzDH7oAAAAASUVORK5CYII=",
    "ogImage": "https://chat.deepseek.com/favicon.svg"
  },
  {
    "id": "grok",
    "title": "Grok",
    "url": "grok.com",
    "href": "https://grok.com/",
    "category": "ai-tools",
    "description": "Conversational AI by xAI with real-time web knowledge and unvarnished reasoning skills.",
    "tags": [
      "ai",
      "realtime",
      "assistant"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACS0lEQVR4nIxTu6paURAd9dxrLhcxvkDBRrEQ1CiWPhBtJIFAFLFJZ+IHKJg/SBO0sTAIpg2KCIIJBMQvEJSUNqKCEURU8P3OzCaenGuaDAzn7Nl7zaxZs7cY0PR6/YNEIgnd399/Rx/d3d1t0S83vsG9X+jf0N8g7IGwIvrBzU/4jaNL4f9sy3FcQaVSfZBgttcY+Ij+7PaUVCoF3IfT6fQkZrVaudFoZF+v1z85jL2/BcvlckgkEuD1elmCTqcDuVwOWq0WRCIRaDabLBdhKYFTCDaZTFAsFkEmk0G73Yblcgk6nQ4sFgs4nU6WoFwuX487ucvl8lyYIJvNAtJjBweDAZzPZ0CBIRqNQiaTgWq1Cvv9np1FrIIT0g8EAmC32yEYDEKv12MxFAtCoRDEYjGYzWagVqtBJBIRmLUhFlb3eDzQ7/d5MJnL5QKFQsFT12q18Pj4yO9zwgQ4TjgcDnA8HlkVg8HABC0UCqyVzWbD4mLx37pPGJDKJBg5UZ/P51Cr1RiYxud2u2E4HDJhhQl210W9Xmdgv9/PmEynU16HcDjM9Mnn8yzhH9txSGmGgmhpRZQrlQo0Gg1IJpOs6mKxAJ/Px7RIp9Ns72qEJQ1a6K9IGJvNBvF4HIxGIzgcDrpxrDoxSaVSUCqVhNVZ1yK8aWFk8NVsNku73S4/Y5q9UqnktSABb2yLDN5KsOfearVSTyaTF3jn+anQnPGuM8FoKjdGun3RaDSf6TWy5zwej1/i7zt0J90w+Pdl7qhnbKGNYywg0x8YW/8GAAD//1PMkaEAAAAGSURBVAMAy+fxYPuWdegAAAAASUVORK5CYII=",
    "ogImage": "https://grok.com/icon-512x512.png"
  },
  {
    "id": "chatgpt",
    "title": "ChatGPT",
    "url": "chatgpt.com",
    "href": "https://chatgpt.com/",
    "category": "ai-tools",
    "description": "Pioneering conversational AI model by OpenAI assisting with code, writing, and problem solving.",
    "tags": [
      "openai",
      "assistant",
      "ai"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACWklEQVR4nIRTTUuiURR+LCMtIioqiora2KqINjFtoomoaBMR0b6aoF3Uok0MIv4Alw7iQjfit3tHFEHBhQi6moUKKiKoqKCv3869Z9TR5qMHDu99z73nOec899wRMHQ6nQNmLmZC52MI3bMHPFbUXXxjJsMA6vU6arUaJiYmMDo6ir/gB7MvnOA7W3zuedk/PB4P7HY7kSwuLuLy8hLLy8uYnp6GWCweJHFxggpbSHueQCAAtVqNh4cHjI+PQ6lUolwuY21tDQsLC7i/v8fKykrvuMAJOr2SLRYLtFotHh8fKZvRaMT29jb29vawtLQEp9OJcDgMhUIBiURCDCM9KofDQdnX19cxOTkJt9uN6+trzM3NEbFKpYJMJqNqotFovwdxL7vX68Xd3R2sViva7TYJ6Pf7kUqlcHJyQkLqdDpEIhG0Wq1hAt4FD+I9c5Hy+Ty1cHt7S3tyuZyy8/5NJhNCoRC2trZ+t8ADucNgMODs7IyyptNpIms2m1hdXcXMzAxcLhdubm4QDAbJ36+AY2dnBy8vL8hmszg/P8fGxgbe3t7o+iqVCmZnZ5HJZFCtVqkdkUg0TMCz7e7uUgaz2QypVIqjoyNMTU3B5/NRQDweh16v72sydAubm5v0TSQSeH5+xsXFBZLJJGw2G46Pj1EqlUj9w8NDnJ6e9kUcGqRYLAaNRkMi8vX8/DxeX19RKBTI//T0RHMxAOGPUW40GigWi1QJv9JcLkdDc3V1hf39fbyD65+PiYMrLQgCEYyNjb3f/vWYunPASb4y+8RMgv+jyszPTM6E9fwEAAD//7OKuIcAAAAGSURBVAMA6M08kL8i7REAAAAASUVORK5CYII=",
    "ogImage": "https://cdn.oaistatic.com/_next/static/media/chatgpt-share-og.49cbb39d.png"
  },
  {
    "id": "microsoft-copilot",
    "title": "Microsoft Copilot",
    "url": "copilot.microsoft.com",
    "href": "https://copilot.microsoft.com/",
    "category": "ai-tools",
    "description": "Everyday AI companion integrated across Microsoft Windows, web search, and Office tools.",
    "tags": [
      "microsoft",
      "ai-assistant",
      "search"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACvUlEQVR4nGRTS0iUURQ+5977P2bGmdEUKdLsZVJYWAlBmyiIwGgZQW2Cioxo1a6FTARB0CaIXhK0qUDahOIiIWol9ECjRQvLUCljzPExzuN/3dO5Q1YzXfjO/Tn/Od95XgW1J0MC4Cr8r88QS6pV4+rH1meF3bYjnrBmm9YERAYA4ZIP2acTAIUgF3edU9mR7hf/Eigjmh7OJRfmS885QKuJQpqwcrMI3syB5WlINDhNIm5dY1UVgTDCyxcv+l6xhUGBV4AwKFAU5IHCJZDfC1CXsgAbXPAb4931lyfbakogXHf37WeBejODBIaIlTuCcB6h/DLxyWmKZa3GRKI1FdtT51ijZ7V9vZnk7P5M4gPufPR4rxDinXEwWHU2KP90+scvne4dPDYYS65ZP+5hor1MMQjIIWNBoX6g1qamjgJpWHVioIAIpIhIx+W9cU6xzQkOF/Nz7ZEugdRxiJhEkwQJdEJtcCcPCp6OYifFToo0SiaSoL/dODIwbupM4nKP+SchRBs98KmAhoDrD1SnNdPJxmCcFLAzfys0GelhtjDDxJy61aOigPVlcMmFQNvGygzpo+pQs9bviBVYpgdMRIjDJnqxt6/L8uyWpMeVRzZ4TBCiZQgY8EptUT8GbIzOSahkwGVos28T07nUiJlSERYuJJJp0hZn5XvgBmXuneDc2IPsIeQcsTgKXTJyG62lHWdEzj0OX50xmglXpqeoOb2rY3ssngbymN5TSIHi/eD1IfGlrr+vXSFW9nsMoAx0H1/DYvoQFPzuyOfibQmJjdwqrwS6rFD63OJQIhgCLfrNEomqrTr/PoCsP0SLIeSXCew2F0SqhCJdhAoaCiDr+a4vzsSEvvPnLVSdbHBzaUUfyIViU+s+JkiWCQJJ4HCyoaTIlxPoy5N45Xa+6jXWHsqAqNWZR57JmOb/Pb8AAAD//zdNQWYAAAAGSURBVAMAxj5SNRWP6dsAAAAASUVORK5CYII=",
    "ogImage": "https://copilot.microsoft.com/static/cmc/images/meta-image.jpg"
  },
  {
    "id": "claude",
    "title": "Claude",
    "url": "claude.ai",
    "href": "https://claude.ai/",
    "category": "ai-tools",
    "description": "Anthropic thoughtful, highly capable AI assistant known for nuanced reasoning and long context.",
    "tags": [
      "anthropic",
      "ai-coding",
      "assistant"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACgklEQVR4nIyTz0tUURTHz7nv+UZLyCJCivIHZpZhYQr9ok0FLVpkNI2KtCkobJMgjuFGDHSsoE2LWrQqmDELo8DoDwiCjFAyx0mLCHKKGAtjxpl5756+M87IjCJ04D7ePfd7Puec+0PRCgt5mztDXS0ns/MPvW4r2NXcQGuYyp1863AXCcmAsL4vbreR8pmL3Masn/8XYPud4ZgQPcBvxXSF0bTk5UoS/pz6m/W6d0x7PW9RZWs2xkx9przNhw3SHbZtdoqK9ShtnReW64A9DQlvISXjX66dKUmQegV5DbGWvApMJmTmE4ap37EUNmK5j4nqP3V5mkhkGyTjiULXw3Qw8aNq32N/HmCnL/DesY39RDLJokcVUxkxfdVMPcJUSloAotOQflx0Cq7kts25E+ntVaHoVDu8PkzXZ9xxDBeGA/8hgBIsVI8eakWpUQ52t5xikoOsKQLnPMYfZlmHgAGM8hy+nYFZGBNI98Yx+J6JYwsqkTKtuESR3gwQBOwCSCjf5uEZQRWvsam/xFE/d/cHJnmFiGa63VWOqEGIGyHeCpeRWRoT5ifY1CPYuKOgbySWTjMbmLpE0QJ1wxFqF6G7nEYLemdsbhpUjuA6u0ifq6VaOxSfrv7umptZBkQtNYaMtmg+BnIjMhwnZh9amoO/GJI6QH+bMfViwpk9u++2P7h8jBlrXYhsaDAMpwDJ+0zWHtyXPSg7nNS6A+ulIhwBfKjQiI/k3YOU7RocGrc2/S3WovwQXqzyDc+Q4gbAwntvDYchuYrT6tbKepnUcmEVIGVGPIkq5VLNzcDS4xE5gIcUziQIoKU2bcUXMsC0rTqFXAt5PZdNQz2r7Pf/WEvzDwAA//8h4MrkAAAABklEQVQDAJvOAgfrQEGgAAAAAElFTkSuQmCC",
    "ogImage": "https://claude.ai/images/claude_share_og.png"
  },
  {
    "id": "perplexity",
    "title": "Perplexity",
    "url": "perplexity.ai",
    "href": "https://www.perplexity.ai/",
    "category": "ai-tools",
    "description": "AI-powered conversational search engine providing direct answers backed by cited sources.",
    "tags": [
      "ai-search",
      "citations",
      "knowledge"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACUElEQVR4nJRTMWhaURQ9+TGQBCK62AiiImrVBseasVEzlIY6Nk1TlIwlU5KhWSqFFBtCCIQuqU07mAabTtqhoyAI6SSI1sEO1QqKDqYKFqP+3/duVLTt0By4/7/37rn33XveewKAKLM2M+maxmOiY+xzyWyCGaanpzE+Po5Go8Gn0Gg09C8Wi/SfmZlBt9tFs9lED22hH8xhsdzEwcE+TCYjzRcX3WQcRqORfJwzhAlheCaTTcBgMGBzcwPz8w5WjUAVORwObG1tkI9zRmL6A0EQWAtTSCaTODl5j9XVR9DpdOSzWi04OnpNa5zDuaIoko9rIMlkMmxvP8Xc3C3I5XJks1moVCp4PB4iRSIRVCoVlsiKer2OdDqDQOAlOp3OVQW8TK1Wi8PDV8jlclAoFFhb8zFiGmNsi2q1iuPjd5TEbDbD5/NSzCABydm+RKlUgiSJ8Hofs0TfUCj86PnaWF9/gr29feJw7qD1/kAUJczO3oDf/wyZzFe241u0Wi2yYPANEokEdncD0Ov1g/5HEkxOTmJp6R7JEg5/oDWlUsFMSePT0zDK5TLcbhfjTo2eAu8lHo9jYeEOE6nB2pCYgPexsvKQSFyXaPQTXSK1Wo1YLEYxg1PoZ3M4bmN5+QFrIQO73Y6Li5/k5qKmUinYbDacnX3E+fmXv1u40kGE0+kkpf3+58jnvzPL09hkMsPlco30P2ihj2bzF0KhELs0QXoPUq+2Wq2GnZ0XdJycM4yRx8QvVF8TDn43OAqFAv7lZ2jzBPw53/2zmv8Az/L5NwAAAP//oE7mDQAAAAZJREFUAwCNjvrsBRWUZgAAAABJRU5ErkJggg=="
  },
  {
    "id": "github-copilot",
    "title": "GitHub Copilot",
    "url": "github.com",
    "href": "https://github.com/copilot",
    "category": "ai-tools",
    "description": "The world most widely adopted AI pair programmer writing code in your favorite IDE.",
    "tags": [
      "pair-programming",
      "code-completion",
      "ide"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABw0lEQVR4nGyTzStuURTGnfe8ubrduu69XQOJiGJEijIwkBgoiQxJmRlTmBia8A8oA0UiHwMDJpKBgSgZUCgZKeQjKd+v4/fwvHWSXb/W3muvtfZezz4nmfFlRFGUiQnhLQiCJ/uyMAGk8D3H4xNsBg4qhRmml3APZ6z7YVBz+y5ZT0OJc4J0cjZmF/JhAk6hBup90CpsQh50wQlUcpvbpAPaoAAacK666E/MObxAM/5H+2cxK/LBVLpAoXqGdQJ+uN/El1alQ6QYxxbFNbh1UraE82mN8Av+qBX5LOpvx94pN4kTG+3bucRcLfyFHtiwfxH/GPZabdq3r1xl/2cxCXV+gVy4gjkYcPAItMI/C6ycNehUgQWLqOrFoOvrulFMA4knTaSPtDh2a/NytkDKor2S+KDKJGwpCULN8XV4Lx0r26pJGDsoyydVQJUDA88rYrdIj1COPRdRxWtO0RMdwoELJDw/9N6Nn1E5R9KgwCLWwrgEI/Ao45tBbBmmD7rhsy1v6IPqhSHQF7gD234VjRyohnKQDsMw+vFtfPwQVtz/RDs0OSHHBS584jIsEH/j+M+fyYuQjVRsrb1ML5/jzxqPfQcAAP//A5jwgwAAAAZJREFUAwAcOdjPxS3NYAAAAABJRU5ErkJggg==",
    "ogImage": "https://github.githubassets.com/assets/copilot-chat-ee053e45453d.png"
  },
  {
    "id": "google-gemini",
    "title": "Google Gemini",
    "url": "gemini.google.com",
    "href": "https://gemini.google.com/app",
    "category": "ai-tools",
    "description": "Google multimodal AI assistant capable of processing text, images, audio, and code seamlessly.",
    "tags": [
      "google",
      "multimodal",
      "ai"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACh0lEQVR4nIxSS08TURQ+9zGPtrQUFEFajAswoTERU5PSjYHEhZCYuID+AGOa+GLhjkiwwTVsjCb8A6QxcaMkbmAl1HdADaa4QEoqkAJtp512Zu5cZ1ofKAU9m3vul/N995xzPwqHhBIKNdtnXSKxcVANrgXyHzh2yXewp27YzqcBSK1adIAAgrBfLroDyR1XM3B6tKMtPlGyYP7PDngQBEuV5z2d18Hd5Ns81uWb84Wv2eRodFI4tAMeA4piYGQu9XRjT+vzVUe7c6nxHCy7TxdW6JELj4brX/XEOJ2LIeMPgZ9EO89eDXUbDl885Qj43wtn2Qe5E76KJ8kOEteymhlJjIgLFaYlBJbQrw74IIhqd/vNgt40lpICrjcozJZZkHwxTkDGdDIdy0TnoJjcHH1bxg8sslbpQHkKLZQ23AZNvmwyZ8cya+Hv9KC5VDpPVtUunik0Q1GTEAPKACGMRUCmDknOzCcG4HGKiBMxCXl1jygoThdsKAKk8ias51TI6gXQiA4cSdWv4RxZFzsXMMJeUwNEXReLaYBiNJkMSaqxc4N75TFZLLmwvsm4ukWAegETiQEXiGlyBcrmaP4bfrhyH5XtEWhl/mkgqGPGBiaefep70eguxFv1LX+utM40rd56up5gTV9Ti0JkcQRXlzjICcQRq/gARYDZ5+xsD+0PzCyQsjbgduzmJE8KjLo0cGc6j2lmYHEELVS2b4dF3mek3t45IzoZFK6ceZxIq8o95tkmqnuD5OjHu/NDx1/C5GsB9nhgn5F+OwpQODUoFz83JHdVL1sl/lPQd8ta2X9YuRIRwPNtcXXN0KdyQmYK+ofKEEE1a2lNgXh1J9ugj1uvsr3Y3/EdAAD//429n5gAAAAGSURBVAMApnISZcw7dI0AAAAASUVORK5CYII=",
    "ogImage": "https://www.gstatic.com/lamda/images/gemini_aurora_thumbnail_4g_e74822ff0ca4259beb718.png"
  },
  {
    "id": "adina-hawaldar",
    "title": "Adina Hawaldar | Web Developer & UI/UX Designer",
    "url": "adinaa.me",
    "href": "https://www.adinaa.me/",
    "category": "design-engineers",
    "description": "Thoughtful, interactive portfolio of web developer & UI/UX designer Adina Hawaldar.",
    "tags": [
      "portfolio",
      "design-engineer",
      "interaction"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACmUlEQVR4nDxRS09TURA+59zLbW9vUXkVVGgiSDC6MSyMLDSQGKPE6MKFexeuiMY/48qYsIMouNAYk+JCTYGWhEdTKBSxpaUPSktbet/33HOcturkLObMzDfzfTNiobCPEMIYcYQJOAi7nBOMCMYcY8Y54k1DLYMYaXuIN6shJxDslUSBEKiBCLy/tW0HgtCpbfBVfLLFePH0jDLk9yvtxvgfhjPGOBIJhi+B0ZLUsRzZTG/HqGlhuSswPHR/8rYOPmBapNpNYQABZKdPXlmLhebm7/XQpzcuTg3KoQ+Lb96998seyP5nhFvasCgKqqrOzX8i1EwWq/nSyU7yYObB+F74Z3hl3Sd7gUpzK7ylAch4PJ74bnJ7N+m6tF7XBE7HRy6N9Pc+u3V1ceGLY9sgFDgBBGAiBzTBh6kMpdxw2MSVwE46w/sYttRvO5nDY7OYzQ0MXrYcF7VgBBNimWYuVwoGAqup07dLUcZgSU7FaEQTB7/T2fByFFhQUNI6CHFsg5oqYXatVpE6xNlIJp4r5U8OZY/waHr6uGEl9jOOTf2KzFlTuPD61fNyMb/48WsqVzJ07Zzf9+LlTLdP6g5e7785tbG+dWY4iXTOsWhwqA9kiD4P3sxmU0dlvyybpqV45YHgmHf0mmvXG6Wipjdwh7i8shGJxHX1yeOHE6RQLMzOhRRJMDVV1ayu3oBeLxt6w3++J5XK6KpRPSkRlyLXWfj8/ahQFgRJWV3blkWsW27DsB0kTt69Mzw6JisXQks/NmKJTr+iapokEochlzKyvvULjofgNrBg5uSL+XQ2D1wt044l9kzbcl0mCkK1VqWWFo7GRc22VLPRUOHsRPbKZ+VavlQGQKVaSWdyIiHMpdS2Tstl6CtJyh8AAAD//12J3VEAAAAGSURBVAMAhC2Ws5G/UBsAAAAASUVORK5CYII=",
    "ogImage": "https://adinaa.me/adina.png"
  },
  {
    "id": "rbp-portfolio",
    "title": "DavidHDev/rbp-portfolio: React Bits Pro - free personal portfolio template with smooth animations, project case studies, and a minimal aesthetic.",
    "url": "github.com",
    "href": "https://github.com/DavidHDev/rbp-portfolio",
    "category": "design-engineers",
    "description": "React Bits Pro free personal portfolio template featuring smooth animations and project case studies.",
    "tags": [
      "portfolio",
      "template",
      "animations"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABtklEQVR4nIyTwStEURSH73szZCiFopTFlM00CzYayp9gpxTFQtkQZcfeghQLC81kFvakLEjZDCuJsLCYwoxig5JixpiZ5zszZ+r2snDq6517z/ndd96557kG8zzPMWr4A5CEe/iCnPpbEDM+s4V1PJZhGhpq2768HGzAouM45UoAoctTxDswZP5nuzAKJVdPWlHxMYxBCj4hCxn1TzV2CMOwJFqpoF8FAYizOcNeEL8D3vSNrfBKrEBsHX8WvmFQEqegXhOLJMhBJZKfrJKfpdEaK+rLGmFSNtM43ZCHXoRp7YuH72mDK02UNRbGvYEmuJbETu3yCzxoYrkmrgmt9aNUpH7YVbGnJ4bsmfCbxuSKm1UXcLXTYm0Q0zKDvuGSzaBWIU1v15dmXb0eo1cl0xYhsfjHJ0iDo6Y6SEYrOJED4rpIwgXckrgHPVYFUdjGPYMIyOwUICFlXRLcZDEHfXAntwEf1ufLDU2oL+McgjW0V/YoH0EXLECG4LlVgTQuY6rDJbYPI/Dj+JISMK5bLRzyrjHpuvglzZmXqZRYsNZlrFKm/Lam+l/krU+QsV2FA/JSlsb7BQAA//8fGtSHAAAABklEQVQDAIsg4TDVy+61AAAAAElFTkSuQmCC",
    "ogImage": "https://opengraph.githubassets.com/b5e8dd957b8db16c1a5d83090b42260aa9b6148786f8b34f998845d414dd537e/DavidHDev/rbp-portfolio"
  },
  {
    "id": "posthog",
    "title": "PostHog – We make dev tools for product engineers",
    "url": "posthog.com",
    "href": "https://posthog.com/",
    "category": "backend-database",
    "description": "All-in-one product analytics, session replay, feature flags, and A/B testing suite for developers.",
    "tags": [
      "analytics",
      "product",
      "session-replay"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABZ0lEQVR4nJRSPauCYBjtpksNDdVQETQG1RA1NVRLS1tLv6HoB/QD+hUNrUEErUFFhIOC4CIoiC7OgoKCg+DHPV4v5v1w8AHF83KO5zzP8+ZzGSufy1ih4OOrQpD/1kfw3yLiL5CCIEjCVIfhcNhut8Gez+eApVKp0+kAxoa/BdPp9PF4NJvN7Xa73+/Bu9/v/X7f9/2/GhIPy7JgX69XRVFWq5XneaZpvl6v0WgkSRJBEDj50cNgMKjX671eD2GgWSwWp9OpVqshKkVRlmXBJ24vdKxWq5PJBDEqlQo0DMNsNpvn80nTNN6QIRtJkm8BGDzPz2az2+3WaDSKxeL5fF6v10hSLpePxyNm4LruO9JyuRyPx8iN7iFGdFBlWe52u4ZhgLrb7WzbFkXRcZxQUCgUMJPL5aKqKtwPhwOWgIT4N9JqmiYIQqvV4jhO1/XUjaYVmQTRsqObEo0luW+Yhye5jJX5tn4CAAD//0k5R9AAAAAGSURBVAMAmRSkQ0i7pysAAAAASUVORK5CYII=",
    "ogImage": "https://posthog.com/images/og/default.png"
  },
  {
    "id": "originkit",
    "title": "Originkit — Free Animated component library for modern websites",
    "url": "originkit.dev",
    "href": "https://www.originkit.dev/",
    "category": "components",
    "description": "Free animated UI component library crafted for modern websites with Tailwind CSS.",
    "tags": [
      "components",
      "animations",
      "tailwind"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC30lEQVR4nGxTTUhUURQ+9+e958yoM1HjD2bSQgMrCYPQ/AnDwoyQiNoUmO3aBC6CQhKTXES0amf0ixIUBBqhkJRgaS5qq/RnIUKmpjP+jO/Nu/d27h1toV7eexzuPd855/vu9zisredngZ17AULH7TXhg9khWnYij1dJQmX/pDsyl1AfWt7GPm/MJfqj2oCSNpDXq9KLzxQGbuUGyfGgRUMRm5riMU/CUlIu/07IgWff3Wt3BxfH1zFkPeg+FWmo2Gk/LojwiPAUSKyrgCjTRSlCCRBmE/gZ8+eHJ72m868WegxWJ7RVZhRd3BsY1WAvqXxCgAN+QPgpfoybcvj4Ngc+ERex7m+i/MbA3JiZsa7QuVOwjUfcpBIpMG77SYD0KEAGvr4HuqA+c30QuyM8XJtPO0ztjmOhA9U5TkeIEWwD1IB19+W/wBofACuuBTnyBCAtw0hGQFHAYRiBgmjY6qNR26oKOzQoNVsN9F2A+B+gDe1AS+qBlJw0sd4zZ5ijczMRsyONHGb3ajKaoyG+TwiiiPQJZGYBb7wPtPISgBSGOy2qBrqrFOSPEYDVJRyAqTSLkCwbFrlWFzatLbZAbcpIairFuU72ngiv51pOiswSceT8FNWxTGetiey7DaLrMk6Et8ItrQMkhCK9E14nn11Vw2iUlZwADUgcF7gDmobsaQWStx8pExAY6z1NB5Q0lx9z5cqMlxwys440RV+WZVunXU8JPGQpMZMpkF5aQG4bMAooHJuw0Wmvt+zRbIPxwcCkbJlY8GMOR3XQLKYTjgqLM6lXxwjWZ45F2K95f6H/q3vV+EDb8cjDxMyhXGssM43WbU9nQRBrxqMM3UyV5sxQDe4Qaqw85TVdGYgPayy7OYiJGJR0ro4HLNoTCZJ8VCkfzW+H8KoYWmvRV2TelctfFsTrrvHEheY38ff/f6atfueOo+HS7QFSUZdvl1Oco2/KH5pelh9b38U+bcz9BwAA//9IvngzAAAABklEQVQDAFTZRWS3hOMlAAAAAElFTkSuQmCC",
    "ogImage": "https://www.originkit.dev/og-image.png?v=3"
  },
  {
    "id": "avatune",
    "title": "Avatune | Avatars that feel like people",
    "url": "avatune.dev",
    "href": "https://www.avatune.dev/",
    "category": "icons-assets",
    "description": "Customizable avatar illustrations and generator that feel like real, diverse people.",
    "tags": [
      "avatars",
      "illustrations",
      "assets"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADyUlEQVR4nExTa0xbZRh+v+9cenqj11EuhQ3GgHWMkgUWjN1mlIEjMeImTBZHMuISN3X7of9MjP7SmBizZbo/Gi9ZptuiaCKwaJRIBzhxWjKgsFFLodALvbec9vT0nG902ZK9v94n7/s8eZ/kfTA8ql4Ape3iO5/sdl4Oq11fZZmL5+/oqio6i7OzZ/ve7h/sPwZgY4uYAKDHPGoLIfgAqMBA9xfpcy+8Ht6zQy3zKSR6Q5WCAN0NCg1z4XzXR0dVrt72+sIRv6XV99rCPQ88EqG2yMWy0d1PXRJlEQnDd2SVUoGr3vxMboK8uram7OAZekrmlubAZpas7Zr8yeCm0ecORlzvA2Dqei9Q/8wDt6HTn1D8+p+2a3gMlgcOowNCCjUveYjeqsQdijWMsirkXuUKJbkEqsZS162g5sehfDpC990AacuVX+3eM/KGWRgU6y3y8JVxatS+l2TyBvQ1Mw8IAfrlfyBTEaC3i6x0VypwGqumCs1fv09f6Nn5Vtsu+6uVrGgTRYY4Q0rKFIxDasCBaC0HsctjMLWNka95ELRVA+nQMTQ/Iyxd8twfA9QnoWvH68izpRLkN5LgI2pi0LLwbYBFHyqtxBiMI2dLAiYnMoSiCXDbJPKNl0P+EmNmbv+ukX2nX3TSMwHpr1habvOnDJCVYMtrEsLqUnIqxqMUK4OtNAsxLYLv11iwszzyWS1koalRa3DUH0/UmHope61lezQqH2qzUXJLFYM9cwI52GxH79bsRpZMAJbiPghkdkKH4xn4YxUgKCbQEX5DWuR0sspq+Q3PC8ytrgpZ2hFOYtN6nJSXULASyKPf9SLJasrg5mwtMCYrsupY1MmwxMVp4een95NNjQIzqdwMPR2J/TuaZ5Yc1cYGTIskrBBRLpIiJXstCB/eB69EeOKVBXCNz8DVWBSxnY0QGV8E7mQHNpt1QZy+tx4p16OQiuFlZ0KWJJYmK/EkrN6YJSScJzxmUZkvBfJkGCbrDDDc95z80uDzjPDlzYncqY9/oItvuLiQdTVUUodO14rUtJeCvxFLNhUClI9MIqc7RG6HomSNFMDjqCOzvIRPpBjv0LL32LQ3HKKKAjPIdLuJRY1KXDBeDTPSOXuz4uX6UlQiYTAzHPnJvwbjRgqn9arCaHIDOXk+0Tr05+fLAMLDCyC5En8vCT3gblZDudDTHuGvtC4KoFfSxMiwWMEqyDoIUazmTNDnAIM3Q6mLYXoilog8boppLbUePWAyn6lTci3hXD4zkUl/ms1mR0iFrh/bqurxrO87/q57pLj/AAAA//8YCsINAAAABklEQVQDAEvYtEMWkatMAAAAAElFTkSuQmCC",
    "ogImage": "https://www.avatune.dev/og.png"
  },
  {
    "id": "peerlist-scroll",
    "title": "Scroll | Discover and connect with professionals",
    "url": "peerlist.io",
    "href": "https://peerlist.io/scroll",
    "category": "utilities",
    "description": "Discover and connect with top designers, developers, and tech professionals.",
    "tags": [
      "community",
      "network",
      "career"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACyUlEQVR4nHRTTUgVURT+zp07b16lRT5fhErpRqtVhFkLA0NCNwWBRCmYEEZQtBIJCgpaBK3cRLQpKPqBokW1cGNKYEW1SsgfCFuUVmblz3tv3szcezv3mpREZxjmMveee77zne+TMCB+DK7vySKT7oSmFmizld8MrwPwFgSKEDTL7yik6cdCfBPtQ99sLsHGg6Z6pNO3OakWMf+1OUSGw20bbcBrgi8An1OIJhCGHWgbekN43FSOxH8FKWqQS2KkhcBCgRAn5NDZWBsYSq0yphDbmzRKfB+JnoSMGyRC2YWAk/MqIin81PN57J6uxKbNVRQniUPx7vskjVTNANvLCKEWyKkIq2UNQtUl4VErFDTX8ryIsOruNLrPn6aOY+3gdshBXkxwua+Pzg7fM0ljBsjzJYqReF6rYJh1DMcSKUDC6ICRB8IUVYyDhw6jZd9+3B94gt5zPTiqGoFPP0Ep4SFRxGXrBCeXw5FlKdVkCSQO5gMvaRLDyQR6TvVieuYLjjQfAD4UYSyZig8qXc4rSrkLOMd+HNuMWkSMtFoi11oCT1twAlopi3NpNC4oJfFXcGFjqxvFlJRKNOdrEb4PceJaJzZmsjjz9BFQFxDFGua3AvgCE3FmYMu76qwCxf3JwMfDKzfAJCNZLOLihUu4FbwwqMjA5JUVim27yFMQVlGVf3AYJtczxTii490nEc4XMKan8LZ+zmCHm4CxKlu6gGYl9zTODVYwq8wgt8ssemmfAiPRP/UaX3fxuS3rDZVmyeQT3nTYFRdmNvS4h7bqDZCyhaeRINZe9lmIz6MfMTA4SGPbcibcWwYqcl+JtsnLIBVSnuTzV1dKeS6OS0ciEf/IU7iO+diZYQKYdM/OWLgZsV801sglKRfihpVmMmwm6XoDWRXnE1fOec5qwyL4x0zLdr7DSEr9TkRW2mxnw3YGAjhRmP/a+RcAAAD//zJT05MAAAAGSURBVAMARWRdAFpjg4QAAAAASUVORK5CYII=",
    "ogImage": "https://peerlist.io/images/og/peerlist.png"
  },
  {
    "id": "infinity-castle",
    "title": "Infinity Castle 無限城 — fly through an endless procedural Japanese castle",
    "url": "thre4dripper.github.io",
    "href": "https://thre4dripper.github.io/Infinity-Castle-ThreeJs/?seed=99&q=auto&motion=100&pace=100&weather=auto&mist=100&density=100&music=0&sfx=0&light=100&inv=0&ghost=0",
    "category": "inspiration",
    "description": "Fly through an endless procedural Japanese castle built with Three.js WebGL rendering.",
    "tags": [
      "threejs",
      "webgl",
      "procedural-art"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACqUlEQVR4nExTv2tUQRD+Zt/uXe7enUkEwWDQIsEunVhokVYLGxtBLAIKip3+BfaiFqIg2CrBMkIKBUFQKzsFGyP5pTk1l1wu9+vde2/HmX0XyfKW3X0zO/PNfN9aAGUX1R4SmWsAx3I2hgD9iBg6WBYGsS+OXkwdZv8izTt3SS4/McbcVhdLYJkUyUUNokMXvaeXcyZkDJYZUnjvn1LJ1hOxWw3M8HLPs9EAAQH+I5C0gkAySGiCkaNRUyYJ4UoRY6riMFMvsaw0WbaoWQM3gpFK+k7maTfJsNVP+ft+Qo1+jmFOzg7zDBdOTNDz8zNIcxaYjFSn9xjVHMpxRgJK7khwaeAbn1awtN5iiktVP121dHF6nH92B9ROUy0FdKgPGogFvkDHEecwHVd4ebNFm72MbWwNNQYJZusVuj47hUQyawZz0AAcBOFQSlmQvP/dCndi6yiKnbtXkxau7HexNxzi8qnj+PC3icWVNfzI+viy38a79QbiksO5Y0fx+Nsalja2kUkbM0FltOMCAhvdPjZ6/UBZKxmibxIs3JrHws35sN+Tf2pTH/W1ysWI+kB0RbpetVEgXkmaOxnj9KUrgcO5xbegdiEK9alESrKIgQL/umOS8lRppJw7CbvWGGBz+VWof3VrgDMT44UiR5owhVjZMooOS5MoH3l4MW13PR7cfx0CNHtC6UShqEzt4qucqLtVijS7yjQtiKdEtNoVTTSHBRO6138jUQVfCo+CYKWToh+2qaTNPZm6i1gR7Qw8RQpWhuwVJYtNfUh8xVNZQBaVIjdlyJzVR9TJcv74Z5c+N9vUSb1IFRCtYCDraiehN7926Gurz0lOJpcXI2ieKZLy5Fj1USmiqwa+lvnMiDAxFplDz5kkCHMv90KbFamZzjDnl7uD3p1/AAAA//+E5vuvAAAABklEQVQDANQ7f3TIpZ/NAAAAAElFTkSuQmCC",
    "ogImage": "https://thre4dripper.github.io/Infinity-Castle-ThreeJs/og.jpg"
  },
  {
    "id": "deluxe-saloon",
    "title": "Deluxe Saloon — an ambient street-corner radio",
    "url": "deluxesalon.in",
    "href": "https://deluxesalon.in/",
    "category": "inspiration",
    "description": "Ambient street-corner lo-fi radio site with retro audio-visual aesthetics and tactile dials.",
    "tags": [
      "audio",
      "retro",
      "ambient"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACp0lEQVR4nDxSS2sTURide+fOTGhexWamj2CbtmpNa3HhgwqCSKHYIoIogi5ciGC7dCO4UKkLN65ctYgKLiyt1p0Ef4C6ENIqNUGjFWubJpk8SDKZpJN5eVLFC7O5893znRdzXTcZexlfmLeaO67jOJbFiyITJY5wVtOwjSZljCNEkDxHrswMT10iybfLsTvTlGeYlrxef2cX4XnHtjiXozzFZTWXbep1wlNgTd2f50+wsl5UeUFs7+nxK12aqlayWb1Yauq6odccx93T28cLgtnY4ThXy6WpZYCJ7ZdlyReoZLaxHS9DkQjnOpZhGDUtk0x4AkFfKIRtltGgnOsKHo9PVrYTa93R4atPnodHD3dE+s/cvhsa2OdYJpMk9XvKF5J5UYJgapvmLpMcSBc2fkFc4ef6yuul/I/UudkHruPaptUik1f9iuKYFtQyJomNSoUKjLbk2oCU2ry51DdBkg6cOo2/sGFHqzLJgwEKQYDBHMHhOEKJoeuRY2Mnr98obf5W9g9FxyfMeh0CsKcFyv07Lj7QI5TCHJ+iKEPRWrHw/tnjjfhHsa0ND8juHLUtE9B/c2jf2+typDs6YtRqW59WIkePX3j4CFA20mQCtkMDeXpxDJlaTbNWUNu7w4QxSqgnGNhcXek6GB2/ecsxzRfT15AGBHAcdDIBFgUQMEfK2+ny1mb6y2d5YHBkYnL9w7vV5UVDq8J6v9KJMWjgz49GNDULr4LhcL1URHOY6LGMpl8OYSHw4stLcv9go1LWS0Vvh8x4EWZRLZ9HxmBfTm8ZdV1Nfc0k1iSfj4liR1+kUdVa8LBU8pBk7FXs3gyAIVr0+oLgRojjwGVoaXlYyWYMTdstnzk5O0eQduLNYnxh7n+90RS0AKPoEpoGrQgON6j3obOX/wAAAP//t9iPxQAAAAZJREFUAwBv718L3WiDtQAAAABJRU5ErkJggg=="
  },
  {
    "id": "instant-domain-search",
    "title": "Domain Name Search: Find Available Domains Instantly",
    "url": "instantdomainsearch.com",
    "href": "https://instantdomainsearch.com/?q=vyrn.",
    "category": "utilities",
    "description": "Instant domain name availability lookup with live suggestions and registrar pricing.",
    "tags": [
      "domains",
      "search",
      "utility"
    ],
    "favicon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABDklEQVR4nJSSvY5FQBiGj2OPjVIiEdEpcBsKEqVaSyNxDQqJhFKioHEDEp2oXINCpaRQKigQxX5Z1fGzJ/sWk3fmmyfz/czz8U897wI8z8dxTFHU4Ry5A/I8VxQFsKZpPgOCINR13bYty7KH0Nf5NoIgQRCgKFoUxTl6ATiOI0kSmEvgLSUcxz3PsywL/LIsJElO03QNvF4v13U1TaNpej8ZhiFN0933fW/b9ltK37/Ksgw8hmG6rhMEYRgGbKuqCsPwOqVdoiiWZQlmnmfTNJMkefxdNLQf1m3bVFU9130LQK8+dwnEMEzXdTAyjuPWdT0DxxdkWYbBRVF0eRuEHvbQonEcfd+/A24/351+AAAA///3T4kJAAAABklEQVQDAB81X5qxQTAdAAAAAElFTkSuQmCC",
    "ogImage": "https://instantdomainsearch.com/api/og?q=vyrn.&locale=en"
  }
];
