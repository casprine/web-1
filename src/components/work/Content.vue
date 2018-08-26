<template>
  <div class="work-content">
    <div class="hero">
      <p class="sans">I work <a href="#" class="link">@Pirple Labs</a> as a frontend developer </p>
      <p class="sans">currently working with
        <span class="stack">React</span>, <span class="stack"> Vue </span>,<span class="stack">Firebase</span> and <span class="stack">Sass</span> </p>
    </div>
    <div class="previous">
      <h1 class="lora">Previous works <span> 🏣</span> </h1>
      <div class="projects">
        <project-card v-for="(project , index) in projects" :key="index" :project="project" />
      </div>
      <div class="oss">
      </div>
    </div>
  </div>
</template>



<script>
  import ProjectCard from "./ProjectCard";
  export default {
    name: "Content",
    components: {
      ProjectCard
    },
    data() {
      return {
        projects: [{
            "url": {
              "live": "https://mig.kree.xyz/",
              "github": "https://github.com/Casprine/mig"
            },
            "category": [
              "react , next.js  , netlify , scss "
            ],
            "logoUrl": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/facebook/65/high-voltage-sign_26a1.png",
            "name": "Mig",
            "about": "A curated list of awesome tools and projects created by Ghanaians",
          },
          {
            "url": {
              "live": "https://feedbackhunt.netlify.com/",
              "github": "https://github.com/Casprine/feedback-hunt"
            },
            "category": [
              "vue , mongo , scss , node"
            ],
            "logoUrl": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA8CAMAAADi4EJ+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC9FBMVEUAAAAAAAAQFRUSFBQRFBQRFBQRFBUSFBURFBURFBURExURFBURExURFBQNGhoAAAARFRURFBURFBURFBURFBQSFBYSFBQSFRUSFBQQFBQQFBURFBURFBURFRUQFRUUFBQRERERFBURFBURExURFRUXFxcAAAAMGBgPFxcRFhYAAAAQExYRFBYRFBYRFBURExUAAAAAJCQRFRURFBQQFRURFBURFBUSFBURFBURFRUSFhYQExcRFBURFBURFBYRFBQTExMRFBQTExcPExMSFRURFBURFBURFBYRFhYODg4RFBQRFBUQExUUFBQRFBURFBQRFRUSFBUQExYRFBQQEBARFBUUFBQQFBQRFRUVFRUVFRUSExURFBURFRURFBQRFBQQEBkQFBUPFhYRFBURFBUSEhYRFBUQFBUNDRsRFBURFBUWFhYRFBUQFBYgICASFRURFBYRFBQTExMQFBQRFBUSFRUTExcRFBUQFhYRFBYQFRURFBURFBURFRURFBQSEhcQGBgUFBQSFRUQFBURFRURExURFBQRExYRExYcHBwQFBURFBUSFRUSFBQRExURERERFBURFBURFBURFBURFBQSFBQRExUPFxcRFBYOFRUQFRURExYRFBUSExURFBYRFBUSEhIQFBQSEhIAAAARFBUSFRUQExYPFBQOFRURFBQQFBQQFBQSFRUTExMRFRUQFBYQFRUSFBQQExYSFhYSEhYRExYQFBQPExcRFBURFBURFRURFRUMFxcQFRUSEhgTExMSFRUSExUPFBQRFxcSFhYRFBURExURFBUQExURFBQRERcSFBYRFBYRFBURFBURFBURFBQQFBYRFBYRFBUaGhoRFBYUFBQSFBQSEhYQFBQQFRURFRURFBYRExUQFRURExURExUQFBQSEhIQFRUSFBYRFRURFBU2OTqYmppucHFUVlf///+3uLhlZ2g8Pj8uMTFDRkfo6Oji4uPW1tfz8/Pn5+fh4uLV1tYsLzB0dnYmKCkAAADukaDMAAAA5nRSTlMAATFkia/R6e7exah5SxQDoef60KOAcWJmfcr7/Md8Jw/i6pJKCwYVIi4FUZrt/rgCB8ZbPrXc2rJ7Ok+p9tVNNtREQqDy75k7Eor3qxnjWtPMUkwQvw0/lBgMnv2TWZYf2SPYz0bNmxPXzhfzjAhX+ZcbQfhWN/Uv4W3W5rmwOCAmVJyId2d2aQno5FVzeB7Cw7P0yGVsIaUlYVyqkKblKn4OBPBIXjQkWEBOYyk9jmByUFNFanBDwMGVhhZuKzWunzMtR+tr8V+LLL1ovtu0oo2xtwqYGrw5u296pNIwhN9/HLp0POZdepgAAAABYktHRACIBR1IAAAACXBIWXMAAAfpAAAH6QGUejxAAAAAB3RJTUUH4gcCDTI1PGoHswAABB1JREFUSMed13lck3UAx/EfCGzjcDglKQZjcQ8YbI1pIGDEEaBybEOStQgljKOAMBMTw8SD0ABBspLlgWhAFyImpCglWhl20Z2d3+777q+eDeR8nvE8+/y312/vPXt+z57n9xshdNnYzrGzd+DxqQSOTs4ucwnrhC6u8yCav8DtmoUL3a91vc4DEHt6SVhZby8prvfx9SPEPyAwKHCujHgHh4QC8jDf8NmswpkP5Q0KhcotQi2GKY9Fi2+M9ItaEg3ExFrGS2+CMs7m5vgETC0x6ZbklFRg2XJmK0sRrwgWpqWDrozMIGqAr2HCWp3cJ2tlDJjKUGVTp+9Fj291SIxalSMHc/rbDNT03S6kwbnqO/KCVsNya/LvBApsZuC1dxUW5RdjtvhxC4CS6fhupYP2ntJZMRAdmwO4T9Nl0nIXEQsMpN7rioqlU/C6Ctv71rPC1LW/X4cN2sknzatM3sASAxsDH0DO5O+9yaaKNQbiYyHfPI4fLK7ewgED1MTrxvVDW1et4KRX5yZg5RhODg2o4YSBbdthP6Z3pOys5agFfg97lI9qZeAcjhio24XdZvxIPWngrBuz9jSZdfPeFpob6+tvJvp25rAoYJne/KR4dN8Omg//7vuJfqAZNzyGx026kTxhhQ4Jwn7T46iVGK3QGxVooPSTBw6CSf/4k7mfacZLDx0upnTbkXZG/YuFWT+qxkFCjj3VYZVWeaKakM6uNKu0pgpPE7Jd4m6VNjyDDkI2RT7LqH/9zdTvtDrzOTxPCC+qm1GP9getPt4DFSHiE71W6fZKdBFSEZLLqP/8y9TftFp7AGsJMTaFR1sxa7WkYA+1ppwU+XlaocPIC47Ub+0UjvdZoWv81/tQ+hiy46zQ7ZGmC0b65UYFj7NWa3eXZpnu7yZk7ues3SQnw8xPphfRcFrOUYu6NOI6s+6vwJkBjvpsW+U82egTOR4D5/TTx//5l+o/pkNLjji6ja0Gg3q8FAIupQRv4WVdXccKsKj8ZQ5Yqm2OOD++ChYNoU8jZ409VOsupMsm1u9d0PteZK2dW3qkr0xa/cNfReg+e5Y4XvHaJcPUnZ4Rr7foWOFh2bbLb0zbMw2GIv1oIwvc6r/3zdbw6Ru2M0OQ2pbNZuV2whNvDcvIjDbzkBCVlmARh3a8/c4a3U66XW5LDPRbqy19e6eR6gjBAC0mJOssUBipKWSwyt7w8++q+4SEqbpayJ1aNGHiGVS0uJe8t+R9QRuxkPaUCKnZp5d/MDx5AhKregKIyqdeUKIllstzpQ5cf6H/0GD3hyVJTkkXa4K7hGSk86OPay/nkdmTlPGpvwEZdmmfeFOv/EcGDVcuCYyffvY5C2tKll8237zdruAPUTfFYd4XXudsWNrRFLaa5hrnK192dn9VxPyu/wFnxc/QW7raxQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNy0wMlQxMzo1MDo1MyswMjowMIw3Km8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDctMDJUMTM6NTA6NTMrMDI6MDD9apLTAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==",
            "name": "FeedbackHunt",
            "about": "Get customer feedback, in realtime, with absolutely zero hassle. [WIP]",
          },
          {
            "url": {
              "live": "https://jester.netlify.com",
              "github": "https://github.com/Casprine"
            },
            "category": [
              "react , scss , node "
            ],
            "logoUrl": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/open-book_1f4d6.png",
  
            "name": "Jester",
            "about": "Collection for all your favourite developer books in ",
  
          },
          {
            "url": {
              "live": "https://degreat.netlify.com",
              "github": "https://github.com/Casprine"
            },
            "category": [
              "html , css , gulp "
            ],
            "logoUrl": "https://degreat.netlify.com/src/img/logo.png",
  
            "name": "Lunch",
            "about": "A website for a local food delivery system, still work in progress tho",
  
          },
          {
            "url": {
              "live": "https://github.com/Casprine/Avil",
              "github": "https://github.com/Casprine/Avil"
            },
            "category": [
              "html  , css"
            ],
            "logoUrl": "https://camo.githubusercontent.com/5f425857f6616c34f1787b8370cab7aa5a0e059b/68747470733a2f2f63646e2e7261776769742e636f6d2f4361737072696e652f4176696c2f39326438646234312f69636f6e732f6c6f676f2e706e67",
  
            "name": "Avil",
            "about": "Get to chrome pages faster with minimium clicks through this extension",
  
          },
          {
            "url": {
              "live": "https://dropout-kilm.herokuapp.com/",
              "github": "https://github.com/gwuah/dropout"
            },
            "category": [
              "react , figma , css , node "
            ],
            "logoUrl": "https://dropout-kilm.herokuapp.com/img/logo.png",
  
            "name": "Dropout",
            "about": "A realtime code collaboration project built during figma/github hackathon 2018.",
  
          }
        ]
      };
    },
  
  };
</script>
