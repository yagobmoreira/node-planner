import cors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastify from 'fastify';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import { env } from "./env";
import { errorHandler } from "./error-handler";
import { confirmParticipants } from './routes/confirm-participant';
import { confirmTrip } from './routes/confirm-trip';
import { createActivity } from './routes/create-activity';
import { createInvite } from "./routes/create-invite";
import { createLink } from './routes/create-link';
import { createTrip } from './routes/create-trip';
import { getActivities } from './routes/get-activities';
import { getLinks } from './routes/get-links';
import { getParticipant } from "./routes/get-participant";
import { getParticipants } from './routes/get-participants';
import { getTripDetails } from "./routes/get-trip-details";
import { updateTrip } from "./routes/update-trip";
import { jsonSchemaTransform } from "fastify-type-provider-zod"

const app = fastify();

app.register(cors, {
  origin: "*",
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH']
});

app.register(fastifySwagger, {
  swagger: {
    consumes: ['application/json'],
    produces: ['application/json'],
    info: {
      title: 'plann.er',
      description: 'Especificações da API para o back-end da aplicação plann.er construída durante o NLW Journey da Rocketseat.',
      version: '1.0.0'
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUI, {
  routePrefix: '/docs',
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.setErrorHandler(errorHandler)

app.register(createTrip)
app.register(confirmTrip)
app.register(confirmParticipants)
app.register(createActivity)
app.register(getActivities)
app.register(createLink)
app.register(getLinks)
app.register(getParticipants)
app.register(createInvite)
app.register(updateTrip)
app.register(getTripDetails)
app.register(getParticipant)

app.listen({port: env.PORT, host: '0.0.0.0'}).then(() => {
  console.log(`Server running on ${env.PORT}`);
})