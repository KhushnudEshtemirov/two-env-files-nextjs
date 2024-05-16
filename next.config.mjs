export default function ({ defaultConfig }) {
  const domain = process.env.DOMAIN;

  let envConfig;
  switch (domain) {
    case "domain1":
      envConfig = import("./.env.domain1").then((module) => module.default);
      break;
    case "domain2":
      envConfig = import("./.env.domain2").then((module) => module.default);
      break;
  }

  return {
    ...defaultConfig,
    async env() {
      return {
        ...defaultConfig.env,
        ...(await envConfig),
      };
    },
  };
}
