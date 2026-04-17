import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container className="py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-gray-900">VideoTube</p>
            <p className="text-sm text-gray-500">
              Built for creators, viewers, and scalable video experiences.
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <Link to="/" className="hover:text-gray-900">
              Home
            </Link>
            <Link to="/subscriptions" className="hover:text-gray-900">
              Subscriptions
            </Link>
            <Link to="/history" className="hover:text-gray-900">
              History
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;