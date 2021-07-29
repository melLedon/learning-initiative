<template>
  <div>
    <footer class="text-center text-lg-start bg-light text-muted">
      <section>
        <div class="container text-center text-md-start">
          <div class="row">
            <div class="col-md-3 col-lg-3 mx-auto mb-4">
              <h5 class="mb-4">Learning Center</h5>
              <div class="row">
                <a class="text-reset" href="http://learning.birkman.com" target="_blank">Learning Resources</a>
                <a class="text-reset" href="https://birkman.zendesk.com" target="_blank">Support Resources</a>
                <a class="text-reset" href="https://birkman.zendesk.com" target="_blank">Promotional Materials</a>
                </div>
            </div>
            <div class="col-md-3 col-lg-3 mx-auto mb-4">
              <!-- Content -->
              <h5 class="mb-4">Training Center</h5>
              <div class="row">
                <a class="text-reset" href="http://store.birkman.com">Stores</a>
                <a class="text-reset" href="https://birkman.zendesk.com" target="_blank">Resources</a>
                <a class="text-reset" href="https://birkman.com/contact/">Connect</a>
                </div>
            </div>
            <div class="col-md-2 col-lg-2 mx-auto mb-4"></div>
            <div class="col-md-4 col-lg-4 mx-auto mb-4">
                  <h5 class="mb-4">Connect with us</h5>
                   <div class="column">
                        <a href="https://www.linkedin.com/company/99173" target="_blank" class="me-4 text-reset">
                            <img src="./../assets/linkedin.svg" alt="linkedin">
                        </a>
                        <a href="https://www.facebook.com/Birkman/ " target="_blank" class="me-4 text-reset">
                            <img src="./../assets/facebook.svg" alt="facebook">
                        </a>
                        <a href="https://twitter.com/Birkman" target="_blank" class="me-4 text-reset">
                            <img src="./../assets/twitter.svg" alt="twitter">
                        </a>
                        <a href="https://www.youtube.com/user/Birkman1951" target="_blank" class="me-4 text-reset">
                            <img src="./../assets/youtube.svg" alt="youtube">
                        </a>
                        <a href="https://www.instagram.com/birkman/?hl=en" class="me-4 text-reset">
                            <img src="./../assets/instagram.svg" alt="instagram">
                        </a>
                    </div>
            </div>
          </div>
        </div>
      </section>
      <hr style="margin-left: 35px; margin-right: 35px; margin-bottom: 0px; border-top: 1px solid">
      <div class="text-center p-4" style="font-size: 14px;">
        <span style="padding: 3px;"> © 2021 Birkman International. All rights reserved</span>
        <a class="text-reset footer-divider" href="https://birkman.com/privacy-policy/" target="_blank">Privacy Policy
        </a>
        <a class="text-reset footer-divider" href="https://birkman.com/terms-of-use/" target="_blank">Terms of Use
        </a>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer-divider{
    border-left: 1px solid; 
    padding: 3px; 
}
a{
    text-decoration: none;
}
footer{
    padding-top: 50px;
    box-shadow: 0 -5px 7px 0 #9b9b9e;
}
h5{
    color: #484848;
}
</style>