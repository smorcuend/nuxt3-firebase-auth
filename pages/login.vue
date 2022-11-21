<template>
  <div class="flex align-items-center justify-content-center overflow-hidden">
    <div class="grid justify-content-center p-2 lg:p-0" style="min-width: 80%">
      <div
        class="col-12 xl:col-6"
        style="
          border-radius: 56px;
          padding: 0.3rem;
          background: linear-gradient(180deg, var(--primary-color), rgba(33, 150, 243, 0) 30%);
        "
      >
        <div
          class="h-full w-full m-0 py-7 px-4"
          style="
            border-radius: 53px;
            background: linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0));
          "
        >
          <!-- <div class="text-center mb-5" v-if="user">
            <div class="text-900 text-3xl font-medium mb-3">Welcome, {{ user.email }}!</div>
            <span class="text-600 font-medium">Sign in to continue</span>
          </div> -->

          <div class="w-full md:w-10 mx-auto">
            <Form @submit="onSubmit" :validation-schema="schema" @invalid-submit="onInvalidSubmit">
              <TextInput
                name="email"
                type="email"
                label="E-mail"
                placeholder="Your email address"
                success-message="Got it, we won't spam you!"
              />
              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="Your password"
                success-message="Nice and secure!"
              />
              <Button
                :label="disabled ? 'Please wait...' : 'Sign in'"
                class="w-full p-3 text-xl submit-btn"
                ref="submitBtn"
                type="submit"
                :disabled="disabled"
              />
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Form } from 'vee-validate'
import '~/utils/vee-validate-rules'
import { User } from '~/models/User'
import { signInWithEmailAndPassword } from 'firebase/auth'
import TextInput from '~/components/TextInput.vue'

const { $toast, $firebaseAuth } = useNuxtApp()
const user$ = useUser()
const disabled = ref(false)
const signinForm = ref({ email: '', password: '' })
const submitBtn = ref()
const token = useCookie('token')

const schema = ref({
  email: 'required|email',
  password: 'required|min:8'
})

const signin = async () => {
  if (signinForm.value.email || signinForm.value.password) disabled.value = true
  try {
    const { user } = await signInWithEmailAndPassword(
      $firebaseAuth,
      signinForm.value.email,
      signinForm.value.password
    )
    user$.value = user as User
    token.value = user$.value.accessToken || ''
    navigateTo('/')
  } catch (error) {
    $toast.add({ severity: 'error', summary: 'Error Message', detail: error, life: 3000 })
    signinForm.value = { email: '', password: '' }
    disabled.value = false
  }
}

function onSubmit({ email = '', password = '' }) {
  signinForm.value = { email, password }
  signin()
}

function onInvalidSubmit() {
  submitBtn.value.classList.add('invalid')
  setTimeout(() => {
    submitBtn.value.classList.remove('invalid')
  }, 1000)
}
</script>
<style>
.submit-btn {
  background: var(--primary-color);
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  padding: 10px 15px;
  display: block;
  width: 100%;
  border-radius: 7px;
  margin-top: 40px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.submit-btn.invalid {
  animation: shake 0.5s;
  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px);
  }
  10% {
    transform: translate(-1px, -2px);
  }
  20% {
    transform: translate(-3px, 0px);
  }
  30% {
    transform: translate(3px, 2px);
  }
  40% {
    transform: translate(1px, -1px);
  }
  50% {
    transform: translate(-1px, 2px);
  }
  60% {
    transform: translate(-3px, 1px);
  }
  70% {
    transform: translate(3px, 1px);
  }
  80% {
    transform: translate(-1px, -1px);
  }
  90% {
    transform: translate(1px, 2px);
  }
  100% {
    transform: translate(1px, -2px);
  }
}

.submit-btn:hover {
  transform: scale(1.1);
}
</style>
