export { default as ProfileWidget } from "./profile-widget";
export { default as AuthWidget } from "./auth-widget";

export const OUTSETA_OPTIONS = {
  domain: process.env.NEXT_PUBLIC_OUTSETA_URL,
  /* Vital setting for a single page application */
  monitorDom: true,
  /* Do not load nocode module */
  load: "auth,profile",
  tokenStorage: "cookie",
  auth: {
    id: "o_auth_embeds",
    mode: "embed",
    selector: ".o-auth-embed",
  },
  profile: {
    id: "o_profile_embed",
    mode: "embed",
    selector: ".o-profile-embed",
  },
};
