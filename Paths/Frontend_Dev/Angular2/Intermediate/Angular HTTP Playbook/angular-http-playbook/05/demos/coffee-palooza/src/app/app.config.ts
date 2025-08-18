import { HttpClientJsonpModule, provideHttpClient, withInterceptors } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { loggingInterceptor } from "./http-interceptors/logging-interceptor";
import { retryInterceptor } from "./http-interceptors/retry-interceptor";
import { jsonCachingInterceptor } from "./http-interceptors/caching-interceptor";

export const appConfig: ApplicationConfig = {
    // The "provideHttpClient" function is the modern way of injecting the HttpClientModule
    providers: [
        provideHttpClient(
            withInterceptors([loggingInterceptor, retryInterceptor, jsonCachingInterceptor])
        ),
        importProvidersFrom(HttpClientJsonpModule)
    ]
}