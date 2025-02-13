job "djubileet" {
  type = "service"

  group "djubileet" {
    network {
      port "http" {
        to = 3000
      }
    }

    service {
      name     = "djubileet"
      port     = "http"
      provider = "nomad"
      tags = [
        "traefik.enable=true",
        "traefik.http.routers.djubileet.rule=Host(`djubileet.se`)||Host(`www.djubileet.se`)",
        "traefik.http.routers.djubileet.tls.certresolver=default",
      ]
    }

    task "djubileet" {
      driver = "docker"

      config {
        image = var.image_tag
        ports = ["http"]
      }

      resources {
        memory = 50
      }
    }
  }
}

variable "image_tag" {
  type = string
  default = "ghcr.io/datasektionen/djubileet:latest"
}
